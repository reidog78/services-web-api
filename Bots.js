const Bot = require("./Bot.js");
const data = require("./data.json");

class Bots{
    constructor(){
      this.bots = new Map();
      data.forEach((item, index, array) => {
        let newBot = new Bot(item);
        this.bots.set(newBot.id,newBot);
      });
    }
    get size(){
      return this.bots.size;
    }
    addBot(bot){
      let newBot = new Bot(bot);
      console.log("addBot :"+JSON.stringify(newBot));
      this.bots.set(newBot.id,newBot);
      return this.getBot(newBot.id);
    }
    getBot(id){
      this.bots.forEach(logMapElements);
      console.log(typeof id);
      console.log("getting bot with id "+id+" : "+JSON.stringify(this.bots.get(id)));
      return this.bots.get(id);
    }
    deleteBot(id){
      this.bots.forEach(logMapElements);
      let bot = this.bots.get(id);
      console.log("bot :"+JSON.stringify(bot));
      if(undefined!=bot){
        this.bots.delete(id);
        return id;
      } else {
        return undefined;
      }
    }
    updateBot(updatedBot){
      const hasBot = this.bots.has(updatedBot.id);
      if(hasBot){
        this.bots.set(updatedBot.id,updatedBot);
        return updatedBot;
      } else {
        return undefined;
      }
    }
    getBots(){
      let tabBots = [];
      for (const v of this.bots.values()) {
        tabBots.push(v);
      }
      return tabBots;
    }
    deleteBots(){
      this.bots.clear();
    }
  
  }
  
  function logMapElements(value, key, map) {
    console.log("m["+key+"] = "+JSON.stringify(value));
  }
  
  
  module.exports = Bots;
  