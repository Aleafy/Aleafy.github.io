(() => {
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  let scheduled = false;
  function updateNavigation() {
    const header = document.querySelector('.masthead').offsetHeight;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= header + 100) current = section;
    }
    for (const link of links) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();

  // Keep the archive toggle below both the recent and expanded news.
  const archive = document.querySelector('#news-archive');
  const newsToggle = document.querySelector('.news-toggle');
  function collapseNews() {
    archive.hidden = true;
    newsToggle.hidden = false;
    newsToggle.setAttribute('aria-expanded', 'false');
    newsToggle.innerHTML = 'Earlier news <span aria-hidden="true">↓</span>';
  }
  collapseNews();
  window.addEventListener('pageshow', collapseNews);
  newsToggle.addEventListener('click', () => {
    const expanded = newsToggle.getAttribute('aria-expanded') === 'true';
    archive.hidden = expanded;
    newsToggle.setAttribute('aria-expanded', String(!expanded));
    newsToggle.innerHTML = expanded ? 'Earlier news <span aria-hidden="true">↓</span>' : 'Earlier news <span aria-hidden="true">↑</span>';
  });

  const wechatDialog = document.querySelector('#wechat-dialog');
  let wechatOpener;
  document.querySelectorAll('.wechat-trigger').forEach(button => {
    button.addEventListener('click', () => {
      wechatOpener = button;
      wechatDialog.showModal();
      document.documentElement.classList.add('modal-open');
    });
  });
  wechatDialog.querySelector('.dialog-close').addEventListener('click', () => wechatDialog.close());
  wechatDialog.addEventListener('click', event => {
    if (event.target !== wechatDialog) return;
    const rect = wechatDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) wechatDialog.close();
  });
  wechatDialog.addEventListener('close', () => {
    document.documentElement.classList.remove('modal-open');
    wechatOpener?.focus();
  });

  const videos = [...document.querySelectorAll('.paper-video')];
  const motionToggle = document.querySelector('.motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches || Boolean(navigator.connection?.saveData);
  const visible = new Set();
  function updateVideo(video) {
    if ((video.dataset.clickPreview && video.dataset.active !== 'true') ||
        (paused && video.dataset.explicitPlay !== 'true') || document.hidden || !visible.has(video)) {
      video.pause();
      return;
    }
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    video.muted = true;
    const request = video.play();
    if (request) request.catch(() => { /* The poster remains if autoplay is blocked. */ });
  }
  function updateMotion() {
    motionToggle.textContent = paused ? 'Play previews' : 'Pause previews';
    motionToggle.setAttribute('aria-pressed', String(paused));
    document.documentElement.classList.toggle('previews-paused', paused);
    videos.forEach(updateVideo);
  }
  motionToggle.hidden = videos.length === 0;
  motionToggle.addEventListener('click', () => {
    paused = !paused;
    videos.forEach(video => { delete video.dataset.explicitPlay; });
    updateMotion();
  });
  reducedMotion.addEventListener('change', event => { paused = event.matches; updateMotion(); });
  document.addEventListener('visibilitychange', () => videos.forEach(updateVideo));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visible.add(target); else visible.delete(target);
        updateVideo(target);
      });
    }, { threshold: 0.1 });
    videos.forEach(video => observer.observe(video));
  } else {
    // Fall back to posters until the user explicitly enables playback.
    videos.forEach(video => visible.add(video));
    paused = true;
  }
  document.querySelectorAll('.click-preview').forEach(button => {
    const video = button.querySelector('video');
    const teaser = button.querySelector('.demo-teaser');
    function showDemo(active) {
      video.dataset.active = String(active);
      video.dataset.explicitPlay = String(active);
      video.hidden = !active;
      teaser.hidden = active;
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', active ? 'Show Alpha-CLIP teaser' : 'Play Alpha-CLIP demos');
      button.title = active ? 'Click to return to teaser' : 'Click to play demos';
      if (active) { visible.add(video); video.currentTime = 0; }
      updateVideo(video);
    }
    button.addEventListener('click', () => showDemo(video.dataset.active !== 'true'));
    video.addEventListener('error', () => showDemo(false));
  });
  updateMotion();
})();
