class Target {
  constructor({ delay, targetSize, onTargetHit, aimTrainerEl }) {
    this.delay = delay || 1000;
    this.targetSize = targetSize || 30;
    this.onTargetHit = onTargetHit;
    this.aimTrainerEl = aimTrainerEl;
  }

  start() {
    const targetImage = document.createElement("img");
    targetImage.src = "./assets/target.png"; // Replace with your image URL or local path
    targetImage.style.position = "absolute";
    targetImage.style.width = `${this.targetSize}px`;
    targetImage.style.height = `${this.targetSize}px`;
    targetImage.style.transition = `all ${(this.delay * 2) / 1000}s`;
    targetImage.classList.add("target");

    let y = Math.floor(this.aimTrainerEl.clientHeight * 0.9 * Math.random());
    let x = Math.floor(this.aimTrainerEl.clientWidth * 0.9 * Math.random());

    targetImage.style.transform = `translate(${x}px, ${y}px)`;

    this.timer = setInterval(() => {
      y = Math.floor(this.aimTrainerEl.clientHeight * 0.9 * Math.random());
      x = Math.floor(this.aimTrainerEl.clientWidth * 0.9 * Math.random());
      targetImage.style.transform = `translate(${x}px, ${y}px)`;
    }, this.delay * 2);

    targetImage.addEventListener("click", () => {
      targetImage.parentNode.removeChild(targetImage);
      clearInterval(this.timer);
      this.timer = 0;
      this.onTargetHit();
    });

    this.aimTrainerEl.append(targetImage);
  }
}
