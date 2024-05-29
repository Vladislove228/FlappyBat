System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, RigidBody2D, GameManager, _dec, _class, _crd, ccclass, property, FailureWindow;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "db://assets/scripts/GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      RigidBody2D = _cc.RigidBody2D;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22339mHmplC94g0Ar6XkdXj", "FailureWindow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'RigidBody2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FailureWindow", FailureWindow = (_dec = ccclass('FailureWindow'), _dec(_class = class FailureWindow extends Component {
        start() {}

        restartGame() {
          var gameManager = director.getScene().getChildByName("GameManager").getComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager);
          gameManager.failureWindow.active = false;
          gameManager.player.getComponent(RigidBody2D).sleep();
          gameManager.player.setPosition(-150, 0);
          gameManager.player.setRotationFromEuler(0, 0);
          gameManager.score = 0;
          gameManager.scoreLabel.string = "Score: 0";
          gameManager.isGameStarted = false;
          director.getScene().getChildByName("Canvas").children.forEach(value => {
            if (value.name === "TopObstacle" || value.name === "Sensor" || value.name === "BottomObstacle") {
              value.destroy();
            }
          });
        }

        mainMenu() {
          director.loadScene("MainMenu");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab87889e4f34c6609d58d9ac1dc975e755758973.js.map