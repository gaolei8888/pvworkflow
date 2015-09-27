draw2d.NodeInputPort = function (_3ce3) {
    draw2d.InputPort.call(this, _3ce3);
};
draw2d.NodeInputPort.prototype = new draw2d.InputPort;
draw2d.NodeInputPort.prototype.type = "NodeInputPort";
draw2d.NodeInputPort.prototype.onDrop = function (port) {
    if (port.getMaxFanOut && port.getMaxFanOut() <= port.getFanOut()) {
        return;
    }
    if (this.parentNode.id == port.parentNode.id) {
    } else {
        var _3ce5 = new draw2d.CommandConnect(this.parentNode.workflow, port, this);
        _3ce5.setConnection(new draw2d.ContextmenuConnection());
        this.parentNode.workflow.getCommandStack().execute(_3ce5);
    }
};