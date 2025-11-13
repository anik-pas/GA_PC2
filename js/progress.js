document.addEventListener('DOMContentLoaded', () => {
  const progressBlock = document.querySelector('.course__progress');
  const numberElement = progressBlock ? progressBlock.querySelector('.course__number') : null;
  const progressBar = progressBlock ? progressBlock.querySelector('progress') : null;

  if (!numberElement || !progressBar) {
    console.error('Элементы для "Заработано учениками" не найдены.');
    return;
  }

  numberElement.textContent = '0 ₽';
  progressBar.value = 0;

  const formatNumber = (num) => {
    return num.toLocaleString('ru-RU') + ' ₽';
  };

  const animateValueAndProgress = (numberEl, progressEl, startNum, endNum, startVal, endVal, duration) => {
    let startTimestamp = null;

    const max = parseFloat(progressEl.max) || 1000000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentNum = Math.floor(progress * (endNum - startNum) + startNum);
      const currentVal = progress * (endVal - startVal) + startVal;

      numberEl.textContent = formatNumber(currentNum);

      progressEl.value = currentVal;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        numberEl.textContent = formatNumber(endNum);
        progressEl.value = endVal;
      }
    };
    window.requestAnimationFrame(step);
  };

  const startAnimation = () => {
    const targetAmount = Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;

    animateValueAndProgress(numberElement, progressBar, 0, targetAmount, 0, targetAmount, 2000); // 2 секунды
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
        observerInstance.unobserve(progressBlock);
        observerInstance.disconnect();
      }
    });
  }, {
    threshold: 0,
    rootMargin: "-33.3% 0px -33.3% 0px"
  });

  observer.observe(progressBlock);
});document.addEventListener('DOMContentLoaded', () => {

  const progressBlock = document.querySelector('.course__progress');
  const numberElement = progressBlock ? progressBlock.querySelector('.course__number') : null;
  const progressBar = progressBlock ? progressBlock.querySelector('progress') : null;

  if (!numberElement || !progressBar) {
    console.error('Элементы для "Заработано учениками" не найдены.');
    return;
  }

  numberElement.textContent = '0 ₽'; 
  progressBar.value = 0;

  const formatNumber = (num) => {
    return num.toLocaleString('ru-RU') + ' ₽';
  };

  const animateValueAndProgress = (numberEl, progressEl, startNum, endNum, startVal, endVal, duration) => {
    let startTimestamp = null;
    const max = parseFloat(progressEl.max) || 1000000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentNum = Math.floor(progress * (endNum - startNum) + startNum);
      const currentVal = progress * (endVal - startVal) + startVal;

      numberEl.textContent = formatNumber(currentNum);
      progressEl.value = currentVal;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        numberEl.textContent = formatNumber(endNum);
        progressEl.value = endVal;
      }
    };
    window.requestAnimationFrame(step);
  };

  const startAnimation = () => {
    const targetAmount = Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;

    animateValueAndProgress(numberElement, progressBar, 0, targetAmount, 0, targetAmount, 2000);
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
        observerInstance.unobserve(progressBlock);
        observerInstance.disconnect();
      }
    });
  }, {
    threshold: 0,
    rootMargin: "-33.3% 0px -33.3% 0px"
  });

  observer.observe(progressBlock);
});