import Conf from './conf'

import './main.less'


 //poX
  //poXRandomness
  //poY
  //poYRandomness
  //veX
  //veXRandomness
  //veY
  //veYRandomness
  //acX
  //acXRandomness
  //acY
  //acYRandomness
    
    
   
    // constructor(){
    //   o.vx = this.particle.vx + this.particle.vxRandomness-this.particle.vxRandomness*2*Math.random()
    //   o.vy = this.particle.vy + this.particle.vyRandomness-this.particle.vyRandomness*2*Math.random()

    //   o.ax = this.particle.ax + this.particle.axRandomness-this.particle.axRandomness*2*Math.random()
    //   o.ay = this.particle.ay + this.particle.ayRandomness-this.particle.ayRandomness*2*Math.random()

    //   // o.scale -= o.scaleV
    //   // 不能是增加。。。o.scaleV保证大于0
    //   o.scaleV = Math.max(this.particle.scaleV + this.particle.scaleRandomness-this.particle.scaleRandomness*2*Math.random(),0)
    //   // o.life -= o.lifeV
    //   // 不能是增加。。。o.lifeV保证大于0
    //   o.lifeV = Math.max(this.particle.lifeV + this.particle.lifeVRandomness-this.particle.lifeVRandomness*2*Math.random(),0)
    //   o.rotV = this.particle.rotV + this.particle.rotVRandomness-this.particle.rotVRandomness*2*Math.random()


    //   o.x = this.particle.poX + this.particle.poXRandomness*Math.random()
    //   o.y = this.particle.poY + this.particle.poYRandomness*Math.random()

    //   o.scale  = Math.max(this.particle.scale + this.particle.scaleRandomness-this.particle.scaleRandomness*2*Math.random(),0)
    //   o.rotation  = this.particle.rot + this.particle.rotRandomness-this.particle.rotRandomness*2*Math.random() 
    //   o.life  = Math.max(this.particle.life + this.particle.lifeRandomness-this.particle.lifeRandomness*2*Math.random(),0) 
    //   o.alife = o.life
    // }

    // update(dt) {
    //   this.visible = true

    //   this.vx += this.ax*dt
    //   this.vy += this.ay*dt 
    //   this.x += this.vx*dt
    //   this.y += this.vy*dt
    //   // (1-0)*Math.PI
    //   this.alpha = Math.sin( Math.max(this.life/this.alife,0)*Math.PI)

    //   this.rotation += this.rotV
    //   this.scale -= this.scaleV
      
    //   this.life -= this.lifeV

    //   if(this.life <= 0 || this.scale <= 0){
    //     this.handle_destory()
    //   }
    // }

