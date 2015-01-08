/*
 * Entity On-screen plugin
 * https://github.com/Zetaphor/impact-entity-onscreen
 */
ig.module(
    'plugins.entity-onscreen'
)
.requires(
    'impact.entity'
)
.defines(function(){

ig.Entity.inject({
    onScreen: false,

    update: function() {
        if (this.pos.y < ig.game.screen.y) this.onScreen = false;
        else if (this.pos.y > ig.game.screen.y + ig.system.height) this.onScreen = false;
        else if (this.pos.x < ig.game.screen.x) this.onScreen = false;
        else if (this.pos.x > ig.game.screen.x + ig.system.width) this.onScreen = false;
        else this.onScreen = true;
        this.parent();
    }
});

});