draw2d.NodeOutputPort = function (_434e) {
    draw2d.OutputPort.call(this, _434e);
};
draw2d.NodeOutputPort.prototype = new draw2d.OutputPort;
draw2d.NodeOutputPort.prototype.type = "NodeOutputPort";
draw2d.NodeOutputPort.prototype.onDrop = function (port) {
    if (this.getMaxFanOut() <= this.getFanOut()) {
        return;
    }
    if (this.parentNode.id == port.parentNode.id) {
    } else {
        var _4350 = new draw2d.CommandConnect(this.parentNode.workflow, this, port);
        _4350.setConnection(new draw2d.ContextmenuConnection());
        this.parentNode.workflow.getCommandStack().execute(_4350);
    }
};