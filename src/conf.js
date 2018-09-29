import stage from './stage'

const Conf = {
  emit:{
    time:.1
    ,timeRandomness:0
    ,count: 1
    ,countRandomness: 2
    ,totalTime: 60
  }
  ,particle:{
    poX:0,
    poXRandomness:50,
    poY:0,
    poYRandomness:50,
    vx:0,
    vxRandomness:50,
    vy:0,
    vyRandomness:50,
    ax:0,
    axRandomness:50,
    ay:0,
    ayRandomness:50,

    scale:1,
    scaleRandomness:1,
    scaleV:.01,
    scaleVRandomness:.01,

    rot:1,
    rotRandomness:1,
    rotV:.01,
    rotVRandomness:.01,
    
    life:1,
    lifeRandomness:1,
    lifeV:.01,
    lifeVRandomness:.01,

    compositeOperation:'lighter',

    textures:['data:image/png;base64','data:image/png;base64']
  }
  ,setParamForEmit(attr,v){
    this.emit[attr] = v
  }
  ,setParamForParticle(attr,v){
    this.particle[attr] = v
  }

}


var gui = new dat.GUI({ autoPlace: false })
document.querySelector('#dat').appendChild(gui.domElement)

var emit_folder = gui.addFolder('emit')
var particle_folder = gui.addFolder('particle')


{
  [
    {attr:'poX',range:[0,stage.width],step:.1}
    ,{attr:'poY',range:[0,stage.height],step:.1}
  ].forEach(o=>{
    // emit_folder.add(Config.emit,'countRange',0,100).step(1).onChange(e=>{
    //   particles.setEmitConfig('countRange',e)
    // })
    particle_folder.add(Conf.particle,o.attr,o.range[0],o.range[1]).step(o.step).onChange(e=>{
      Conf.setParamForParticle(o.attr,e)
    })
  })
  particle_folder.add(Conf.particle,'compositeOperation',['lighter','source-over']).onChange(e=>{
    
  })
}

{
  [
    {attr:'time',range:[0,10],step:.001}
    ,{attr:'timeRandomness',range:[0,10],step:.001}
    ,{attr:'count',range:[0,20],step:1}
    ,{attr:'countRandomness',range:[0,20],step:1}
    ,{attr:'totalTime',range:[-1,60],step:1}
  ].forEach(o=>{ 
    emit_folder.add(Conf.emit,o.attr,o.range[0],o.range[1]).step(o.step).onChange(e=>{
      Conf.setParamForEmit(o.attr,e)
    })
  })
}





export default Conf