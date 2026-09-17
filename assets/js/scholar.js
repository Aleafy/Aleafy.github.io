(() => {
  const badge = document.querySelector('.scholar-badge');
  const count = document.querySelector('#scholar-citations');
  if (!badge || !count) return;
  let checkedOn = badge.dataset.scholarChecked || '';
  let refreshing = false;
  async function refreshCitations() {
    if (refreshing || document.hidden) return;
    refreshing = true;
    // Raw GitHub data stays fresh even if a bot commit does not rebuild Pages.
    const remote = location.hostname === 'aleafy.github.io';
    const endpoint = remote ? badge.dataset.scholarRemote : badge.dataset.scholarLocal;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(endpoint, { cache: 'no-store', signal: controller.signal });
      if (!response.ok) throw new Error('Citation data unavailable');
      const data = await response.json();
      if (!Number.isSafeInteger(data.total_citations) || data.total_citations < 0 ||
          data.profile !== badge.getAttribute('href') ||
          !/^\d{4}-\d{2}-\d{2}$/.test(data.checked_on) || data.checked_on < checkedOn) return;
      count.textContent = data.total_citations.toLocaleString('en-US');
      checkedOn = data.checked_on;
      badge.dataset.scholarChecked = checkedOn;
      badge.title = `Total citations on Google Scholar · checked ${checkedOn}`;
    } catch (_) {
      // Keep the last verified count and its actual date on timeout or invalid data.
    } finally {
      clearTimeout(timeout);
      refreshing = false;
    }
  }
  refreshCitations();
})();
