function parseMurmur(da){
    return {da} 
  }
  
  function updateTransferMurmur(state, payload, blockInfo, context) {
    const {  } = parseMurmur(blockInfo)
    state.totalTransaction += 1
  }
  
  const updaters = [
    {
      actionType: "secutrixdapp::uploader",
      updater: updateTransferMurmur,
    },
    {
      actionType: "secutrixdapp::docregis",
      updater: updateTransferMurmur,
    },
    {
      actionType: "secutrixdapp::sechat",
      updater: updateTransferMurmur,
    }
  ]
  
  module.exports = updaters
  