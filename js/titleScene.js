/* eslint valid-jsdoc: "error" */
/* eslint-env es6 */

/**
 * aa
 */
class TitleScene extends Phaser.Scene {
  /**
   * xxx
   */
  constructor() {
    super({key: 'titleScene'});
  }

  /**
   * xxx
   * @param {string} data - No idea.
   * @returns {void}
   */
  init(data) {

  }

  /**
   * xxx
   * @returns {void}
   */
  preload() {
    this.load.image('background', 'assets/background.jpg');
  }

  /**
   * xxx
   * @param {string} data - No idea.
   * @returns {void}
   */
  create(data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume();
    }
    const bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    const text = this.add.text(100, 400, 'Welcome to my game!');
    text.setInteractive({useHandCursor: true});
    text.on('pointerdown', () => this.clickButton());
  }

  /**
   * xxx
   * @param {number} time - No idea.
   * @param {number} delta - No idea.
   * @returns {void}
   */
  update(time, delta) {

  }

  /**
   * xxx
   * @returns {void}
   */
  clickButton() {
    this.scene.switch('gameScene');
  }
}

export default TitleScene;
