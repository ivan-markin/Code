<!doctype html>
<html ⚡>

<head>
  <meta charset="utf-8">
  <title>Code</title>
  <link rel="canonical" href="index.html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <style amp-boilerplate>
    body {
      -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      animation: -amp-start 8s steps(1, end) 0s 1 normal both
    }

    @-webkit-keyframes -amp-start {
      from {
        visibility: hidden
      }

      to {
        visibility: visible
      }
    }

    @-moz-keyframes -amp-start {
      from {
        visibility: hidden
      }

      to {
        visibility: visible
      }
    }

    @-ms-keyframes -amp-start {
      from {
        visibility: hidden
      }

      to {
        visibility: visible
      }
    }

    @-o-keyframes -amp-start {
      from {
        visibility: hidden
      }

      to {
        visibility: visible
      }
    }

    @keyframes -amp-start {
      from {
        visibility: hidden
      }

      to {
        visibility: visible
      }
    }
  </style><noscript>
    <style amp-boilerplate>
      body {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        animation: none
      }
    </style>
  </noscript>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>

  <style amp-custom>
    @font-face {
      font-family: 'TT-Norms';
      src: url('./assets/fonts/TTNorms-Light.ttf');
      font-style: normal;
      font-weight: 300;
    }

    @font-face {
      font-family: 'TT-Norms';
      src: url('./assets/fonts/TTNorms-Regular.ttf');
      font-style: normal;
      font-weight: 400;
    }

    @font-face {
      font-family: 'TT-Norms';
      src: url('./assets/fonts/TTNorms-Medium.ttf');
      font-style: normal;
      font-weight: 500;
    }

    @font-face {
      font-family: 'TT-Norms';
      src: url('./assets/fonts/TTNorms-Bold.ttf');
      font-style: normal;
      font-weight: 600;
    }

    body {
      font-family: 'TT-Norms', sans-serif;
      color: white;
    }

    h1 {
      font-size: 23px;
      font-weight: 300;
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
    }

    .darken {
      background-color: black;
      opacity: .6;
    }

    .title-block {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: fit-content;
      position: relative;
      bottom: -10px;
    }

    .title-block p {
      font-size: 10px;
      margin: 0;
    }

    .logo-block {
      display: flex;
      margin: 0 0 10px;
    }

    .logo-block__divider {
      height: 56px;
      width: 1px;
      background-color: #fff;
      margin: 0 16px;
    }

    .logo-block__moss {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      border: #fff 1px solid;
    }

    .subtitle-block {
      display: flex;
      flex-direction: column;
      width: fit-content;
    }

    .parameters-block {
      display: flex;
      flex-direction: column;
      width: fit-content;
      /* margin-bottom: 5px; */
    }

    .parameters-block span {
      align-self: flex-end;
      font-size: 8px;
    }

    .parameter-name {
      font-size: 9px;
      font-weight: 400;
      text-transform: uppercase;
    }

    .parameter-value {
      font-size: 22px;
      font-weight: 300;
      margin: 0;
    }

    .cta-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cta-container span {
      font-size: 12px;
      text-transform: uppercase;
    }

    .bottom-block {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 97vh;
    }

    .cta-button {
      width: 50px;
      height: 50px;
      background: #FF5900 url('./assets/whatsapp-logo.svg') no-repeat center;
      background-size: 50%;
      border-radius: 50%;
    }

    .address {
      display: flex;
      font-size: 9px;
      width: 100%;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .address div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }

    .extended-parameters-block {
      display: flex;
      height: 40vh;
    }

    .blueprint-block {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40vh;
      width: 50%;
      background: rgba(0, 0, 0, .6);
      border-radius: 6px;
    }

    @media (min-height: 780px) and (orientation: portrait) {
      h1 {
        font-size: 28px;
      }

      h2 {
        font-size: 24px;
      }
    }
  </style>
</head>

<body>
  <amp-story standalone>

    <!-- PAGE 1 -->
    <amp-story-page id="page1" auto-advance-after="yakimankaVideo">
      <amp-story-grid-layer template="fill">
        <amp-video id="yakimankaVideo" width="1080" height="1920" layout="responsive" poster="./assets/1-slide-poster.jpg" autoplay>
          <source src="./assets/1-slide-video.mp4" type="video/mp4" />
          >
        </amp-video>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="fill">
        <div class="darken"></div>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" style="padding: 30px 20px 0;">
        <div class="title-block" animate-in="fade-in" animate-in-duration="1.3s">
          <h1>CODE Якиманка 2.0</h1>
          <p>2-я очередь</p>
        </div>
        <div class="logo-block" animate-in="fade-in" animate-in-duration="1.3s" animate-in-delay="0.2s">
          <amp-img src="./assets/code-logo.svg" width="45" height="56" alt="CODE">
          </amp-img>
        </div>
        <div class="subtitle-block" animate-in="fade-in" animate-in-duration="1.3s" animate-in-delay="0.4s">
          <h2>Отдельно стоящее здание</h2>
          <p class="parameter-value">в самом центре столицы</p>
        </div>
        <div class="parameters-block" animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.5s">
          <p class="parameter-name">площадь в аренду</p>
          <p class="parameter-value">6 300 м<sup>2</sup></p>
        </div>
        <div class="parameters-block" animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.7s">
          <p class="parameter-name">рабочих мест</p>
          <p class="parameter-value">до 1 260</p>
        </div>
        <div class="parameters-block" animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.9s" style="margin-bottom: 0;">
          <p class="parameter-name">стоимость за рабочее место</p>
          <p class="parameter-value">30 000 ₽/мес.</p>
          <span>Без учета НДС</span>
        </div>
        <div class="parameters-block" animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.1s" style="position: relative; top: -10px;">
          <p class="parameter-name">готовность</p>
          <p class="parameter-value">4 кв. 2021</p>
        </div>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" style="padding: 0 20px;">
        <div class="bottom-block" animate-in="fly-in-bottom" animate-in-duration="1s" animate-in-delay="1.3s">
          <div class="address" style="position: relative; bottom: -10px;">
            <div>
              <span>Москва</span>
              <span>Кадашевская наб.,&nbsp;6/1/2&nbsp;с1</span>
            </div>
            <div>
              <span>Полянка / Третьяковская</span>
              <span>(7 мин.)</span>
            </div>
          </div>
          <div class="cta-container">
            <span>Получить презентацию</span>
            <amp-img src="./assets/right-arrow.svg" width="50" height="20" alt="">
            </amp-img>
            <!-- <a role="button" onclick="window.location='https://wa.me/+79250329522?text=Здравствуйте!%20Пришлите%20пожалуйста%20презентацию%20по%20проекту%20CODE%20Якиманка%202.0'" class="cta-button"></a> -->
            <a href="https://wa.me/+79250329522?text=Здравствуйте!%20Пришлите%20пожалуйста%20презентацию%20по%20проекту%20CODE%20Якиманка%202.0" class="cta-button"></a>
          </div>
        </div>
      </amp-story-grid-layer>
    </amp-story-page>

    <!-- PAGE 2 -->
    <amp-story-page id="page2" auto-advance-after="10s">
      <amp-story-grid-layer template="fill">
        <amp-img src="./assets/2-slide-bg.jpg" width="1357" height="2234" layout="responsive" alt="">
        </amp-img>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="fill">
        <div class="darken"></div>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" style="padding: 30px 20px 0;">
        <div class="title-block" animate-in="fade-in" animate-in-duration="1.3s">
          <h1>CODE Якиманка 2.0</h1>
          <p>2-я очередь</p>
        </div>
        <div class="logo-block" animate-in="fade-in" animate-in-duration="1.3s" animate-in-delay="0.2s">
          <amp-img src="./assets/code-logo.svg" width="45" height="56" alt="CODE">
          </amp-img>
        </div>
        <div class="subtitle-block" animate-in="fade-in" animate-in-duration="1.3s" animate-in-delay="0.4s">
          <h2>Локация</h2>
          <p class="parameter-value">м. Полянка / Третьяковская</p>
          <span style="font-size: 9px; align-self: flex-end;">7 мин.</span>
        </div>
        <p style="font-size: 14px; font-weight: 600; margin-bottom: 3vh;" animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.6s">
          Якиманка, небольшой культурно-деловой район в центре столицы
        </p>
        <p animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.8s" style="font-weight: 600; font-size: 14px;">Окружение:</p>
        <ul style="margin-left: 6px; padding: 0; list-style: '- '; font-size: 11px;">
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="0.9s">Кремль</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1s">Красная площадь</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.1s">Третьяковская галерея</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.2s">«Красный Октябрь»</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.3s">Парк «Зарядье»</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.4s">Парк «Музеон»</li>
          <li animate-in="fly-in-left" animate-in-duration="1s" animate-in-delay="1.5s">«Парк Горького»</li>
        </ul>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" style="padding: 0 20px;">
        <div class="bottom-block" animate-in="fly-in-bottom" animate-in-duration="1s" animate-in-delay="1.7s">
          <div class="cta-container">
            <span>Получить презентацию</span>
            <amp-img src="./assets/right-arrow.svg" width="50" height="20" alt="">
            </amp-img>
            <!-- <a onclick="document.location.href='https://wa.me/+79250329522?text=Здравствуйте!%20Пришлите%20пожалуйста%20презентацию%20по%20проекту%20CODE%20Якиманка%202.0'" class="cta-button"></a> -->
            <a href="https://wa.me/+79250329522?text=Здравствуйте!%20Пришлите%20пожалуйста%20презентацию%20по%20проекту%20CODE%20Якиманка%202.0" class="cta-button"></a>
          </div>
        </div>
      </amp-story-grid-layer>
    </amp-story-page>
  </amp-story>
</body>

</html>