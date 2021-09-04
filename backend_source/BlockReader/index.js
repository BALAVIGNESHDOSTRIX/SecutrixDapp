const { BaseActionWatcher } = require("demux")
const { NodeosActionReader } = require("demux-eos") 
const ObjectActionHandler = require("./ObjectActionHandler")
const updaters = require("./updaters")
const effects = require("./effects")

const actionHandler = new ObjectActionHandler(
  updaters,
  effects,
)
const actionReader = new NodeosActionReader(
  'http://jungle2.cryptolions.io:80',
  2185200,
)
const actionWatcher = new BaseActionWatcher(
  actionReader,
  actionHandler,
  500,
)

actionWatcher.watch()

module.exports = actionWatcher;
