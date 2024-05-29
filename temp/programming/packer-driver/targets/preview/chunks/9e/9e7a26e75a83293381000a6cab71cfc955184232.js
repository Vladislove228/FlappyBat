System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, RigidBody2D, Vec2, Prefab, director, instantiate, Collider2D, Contact2DType, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Prefab = _cc.Prefab;
      director = _cc.director;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58db1mqDmVC5oYQaBlek4iw", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'RigidBody2D', 'Vec2', 'Prefab', 'director', 'instantiate', 'Collider2D', 'Contact2DType', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('G'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Label), _dec(_class = (_class2 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "failureWindow", _descriptor2, this);

          _initializerDefineProperty(this, "topObstacle", _descriptor3, this);

          _initializerDefineProperty(this, "bottomObstacle", _descriptor4, this);

          _initializerDefineProperty(this, "sensor", _descriptor5, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor6, this);

          this.isGameStarted = false;
          this.score = 0;
        }

        start() {
          input.on(Input.EventType.TOUCH_START, this.jump, this);
          this.player.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          this.player.getComponent(Collider2D).on(Contact2DType.END_CONTACT, this.endContact, this);
        }

        onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node.name !== "Sensor") {
            this.failureWindow.active = true;
            this.unscheduleAllCallbacks();
            director.getScene().getChildByName("Canvas").children.forEach(value => {
              if (value.name === "TopObstacle" || value.name === "Sensor" || value.name === "BottomObstacle") {
                value.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
              }
            });
          }
        }

        endContact(selfCollider, otherCollider) {
          if (otherCollider.node.name === "Sensor") {
            this.score += 1;
            this.scoreLabel.string = "Score: " + this.score;
          }
        }

        jump() {
          var body = this.player.getComponent(RigidBody2D);
          body.linearVelocity = new Vec2(0, 0);
          body.applyLinearImpulseToCenter(new Vec2(0, 700), true);

          if (!this.isGameStarted) {
            this.schedule(() => this.genetateObstacles(), 0.8);
            this.isGameStarted = true;
          }
        }

        genetateObstacles() {
          var canvas = director.getScene().getChildByName("Canvas");
          var speed = 25;
          var yRandom = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 300);
          var topObstacle = instantiate(this.topObstacle);
          topObstacle.setParent(canvas);
          topObstacle.setPosition(550, 750 + yRandom);
          topObstacle.setSiblingIndex(3);
          topObstacle.getComponent(RigidBody2D).linearVelocity = new Vec2(-speed, 0);
          var bottomObstacle = instantiate(this.bottomObstacle);
          bottomObstacle.setParent(canvas);
          bottomObstacle.setPosition(550, -750 + yRandom);
          bottomObstacle.setSiblingIndex(3);
          bottomObstacle.getComponent(RigidBody2D).linearVelocity = new Vec2(-speed, 0);
          var sensor = instantiate(this.sensor);
          sensor.setParent(canvas);
          sensor.setPosition(550, yRandom);
          sensor.setSiblingIndex(3);
          sensor.getComponent(RigidBody2D).linearVelocity = new Vec2(-speed, 0);
          this.schedule(() => {
            topObstacle.destroy();
            bottomObstacle.destroy();
            sensor.destroy();
          }, 2);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "failureWindow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "topObstacle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bottomObstacle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sensor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e7a26e75a83293381000a6cab71cfc955184232.js.map