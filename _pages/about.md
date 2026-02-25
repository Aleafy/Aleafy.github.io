---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


<!-- Hi! I am a third-year Ph.D. student at [College of Computer Science and Artificial Intelligence, Fudan University](https://ai.fudan.edu.cn/), supervised by Prof. [Dahua Lin](http://dahua.site/). 
I also work closely with [Tong Wu](https://wutong16.github.io/). Prior to this, I earned my Bachelor's degree from [School of Artificial Intelligence, ](https://ai.nju.edu.cn/main.htm) in 2023.

My research interests include video generation and editing, intrinsic representations, and multimodal learning. -->

Hi👋! I am a third-year Ph.D. student at the 
[College of Computer Science and Artificial Intelligence, Fudan University](https://ai.fudan.edu.cn/), 
supervised by Prof. [Dahua Lin](http://dahua.site/). 
I also work closely with Dr. [Tong Wu](https://wutong16.github.io/). Prior to this, I received my Bachelor's degree from the 
[Artificial Intelligence, HIT](https://computing.hit.edu.cn/) in 2023.

 
My research interests include video generation and editing, intrinsic representations, and multimodal learning.
I focus on building controllable and world-consistent AIGC systems for video and 3D visual content.
My recent work explores modeling intrinsic factors such as appearance, lighting, and materials to enable structured and interpretable visual representations.



If you are interested in academic collaboration or discussion, please feel free to contact me via email at 
[yefang23@m.fudan.edu.cn](mailto:yefang23@m.fudan.edu.cn).😊


# 🔥 News
- *2026.02*: 🎉 Congratulations! One **first-author** paper **V-RGBX** has been accepted **[CVPR 2026](https://cvpr.thecvf.com/Conferences/2026)**.

- *2026.01*: 🎉 Congratulations! Our **GPT4Scene** has been accepted **[ICLR 2026](https://iclr.cc/Conferences/2026)**.

- *2025.07*: 🎉 Congratulations! Our **GPT4Point++** has been accepted **[IEEE TPAMI 2025](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34)**.

- *2024.09*: 🎉 Congratulations! One **first-author** paper **Make-it-Real** accepted by **[NeurIPS 2024](https://neurips.cc/Conferences/2024)**.

- *2024.03*: 🎉 Congratulations! Two **co-first-author** papers **Alpha-CLIP** and **GPT4Point** accepted by **[CVPR 2024](https://cvpr.thecvf.com/Conferences/2024)**.

- *2023.09*: 🎓 Joined **Fudan University** as a Ph.D. student.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/V-RGBX.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[V-RGBX: Video Editing with Accurate Controls over Intrinsic Properties](https://aleafy.github.io/vrgbx/)

**Ye Fang**, Tong Wu, Valentin Deschaintre, Duygu Ceylan, Iliyan Georgiev, Chun-Hao Paul Huang, Yiwei Hu, Xuelin Chen, Tuanfeng Yang Wang

[**[Project]**](https://aleafy.github.io/vrgbx/)&nbsp;
[**[Paper]**](https://arxiv.org/pdf/2512.11799)&nbsp;
[**[Code]**](https://github.com/Aleafy/V-RGBX)&nbsp;
[**[Video]**](https://www.youtube.com/watch?v=j5yGqvB-BP0)&nbsp;
<!-- [**[Data]**](https://huggingface.co/datasets/xxx) -->

</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/Make-It-Real.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Make-it-Real: Unleashing Large Multimodal Model for Painting 3D Objects with Realistic Materials](https://github.com/Aleafy/Make_it_Real/)

**Ye Fang**$^\*$, Zeyi Sun$^\*$, Tong Wu, Jiaqi Wang, Ziwei Liu, Gordon Wetzstein, Dahua Lin

[**[Project]**](https://sunzey.github.io/Make-it-Real/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2404.16829)&nbsp;
<!-- https://proceedings.neurips.cc/paper_files/paper/2024/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf -->
<!-- https://arxiv.org/abs/2404.16829 -->
[**[Code]**](https://github.com/Aleafy/Make_it_Real)&nbsp;
[**[Video]**](https://www.youtube.com/watch?v=_j-t8592GCM)&nbsp;
<!-- [**[Data]**](https://huggingface.co/datasets/xxx) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024 Highlight</div><img src='images/GPT4Point.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Gpt4point: A unified framework for point-language understanding and generation](https://github.com/Pointcept/GPT4Point)

Zhangyang Qi$^\*$, **Ye Fang**$^\*$, Zeyi Sun$^\*$, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao

[**[Project]**](https://gpt4point.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2312.02980)&nbsp;
[**[Code]**](https://github.com/Pointcept/GPT4Point)&nbsp;
<!-- [**[Video]**](https://www.youtube.com/watch?v=j5yGqvB-BP0)&nbsp; -->
<!-- [**[Data]**](https://huggingface.co/datasets/xxx) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/Alpha-CLIP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Alpha-clip: A clip model focusing on wherever you want](https://github.com/SunzeY/AlphaCLIP)

Zeyi Sun$^\*$, **Ye Fang**$^\*$, Tong Wu, Pan Zhang, Yuhang Zang, Shu Kong, Yuanjun Xiong, Dahua Lin, Jiaqi Wang

[**[Project]**](https://aleafy.github.io/alpha-clip/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2312.03818)&nbsp;
[**[Code]**](https://github.com/SunzeY/AlphaCLIP)&nbsp;
[**[Video]**](https://www.youtube.com/watch?v=UAUJNFJSbiI)&nbsp;
<!-- [**[Data]**](https://huggingface.co/datasets/xxx) -->

</div>
</div>


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2025</div><img src='images/RelightVid.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RelightVid: Temporal-consistent diffusion model for video relighting](https://aleafy.github.io/relightvid/)

**Ye Fang**$^\*$, Zeyi Sun$^\*$, Shangzhan Zhang, Tong Wu, Yinghao Xu, Pan Zhang, Jiaqi Wang, Gordon Wetzstein, Dahua Lin

[**[Project]**](https://aleafy.github.io/relightvid/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2501.16330)&nbsp;
[**[Code]**](https://github.com/Aleafy/RelightVid)&nbsp;
[**[Video]**](https://www.youtube.com/watch?v=8yTOgCgMyIM)&nbsp;

</div>
</div> -->


<!-- <hr>  -->


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/GPT4Scene.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Gpt4scene: Understand 3d scenes from videos with vision-language models](https://gpt4scene.github.io/)

Zhangyang Qi$^\*$, Zhixiong Zhang$^\*$, **Ye Fang**, Jiaqi Wang, Hengshuang Zhao

[**[Project]**](https://gpt4scene.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2501.01428)&nbsp;
[**[Code]**](https://github.com/Qi-Zhangyang/GPT4Scene-and-VLN-R1)&nbsp;

</div>
</div>



<hr> 
[RelightVid: Temporal-consistent diffusion model for video relighting](https://aleafy.github.io/relightvid/) [Arxiv 2025]

**Ye Fang**$^\*$, Zeyi Sun$^\*$, Shangzhan Zhang, Tong Wu, Yinghao Xu, Pan Zhang, Jiaqi Wang, Gordon Wetzstein, Dahua Lin

[**[Project]**](https://aleafy.github.io/relightvid/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2501.16330)&nbsp;
[**[Code]**](https://github.com/Aleafy/RelightVid)&nbsp;
[**[Video]**](https://www.youtube.com/watch?v=8yTOgCgMyIM)&nbsp;




<hr> 
[GPT4Point++: Advancing Unified Point-Language Understanding and Generation](https://ieeexplore.ieee.org/abstract/document/11122591) [TPAMI 2025]

Zhangyang Qi, **Ye Fang**, Zeyi Sun, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao

[**[Paper]**](https://ieeexplore.ieee.org/abstract/document/11122591)&nbsp;



<hr> 
[Gemini vs GPT-4V: A Preliminary Comparison and Combination of Vision-Language Models Through Qualitative Cases](https://arxiv.org/abs/2312.15011) [Technical Report]

Zhangyang Qi, **Ye Fang**, Mengchen Zhang, Zeyi Sun, Tong Wu, Ziwei Liu, Dahua Lin, Jiaqi Wang, Hengshuang Zhao

[**[Project]**](https://github.com/Qi-Zhangyang/Gemini-vs-GPT4V)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2312.15011)&nbsp;



# 📖 Educations
- *2023.09 - Present*, Ph.D. in Computer Science and Artificial Intelligence, Fudan University.
- *2019.09 - 2023.06*, Bachelor in Artificial Intelligence, Harbin Institute of Technology (Yingcai Honors College).

# 🏅 Honors and Awards
- 2024, Qi An Xin (QiAnXin Technologies) Scholarship, Fudan University.
- 2021, Shenzhen Stock Exchange (SZSE) Enterprise Scholarship (Undergraduate).
- 2021, Gold Award (Ranked 1st Provincially), “Internet+” College Student Innovation and Entrepreneurship Competition.
- 2017, 2018, First Prize (Provincial, Twice), National High School Mathematics League (China).

# 🤗 Community Services
- Conference reviewer for ICML'24, NeurIPS’25, Siggraph’25, CVPR'26.
- Community: Organizer to [DeepLearning-MuLi-Notes](https://github.com/MLNLP-World/DeepLearning-MuLi-Notes) (3.7k⭐); contributor to [Top-AI-Conferences-Paper-with-Code](https://github.com/MLNLP-World/Top-AI-Conferences-Paper-with-Code) (2.7k⭐).

<!-- 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->