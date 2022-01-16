

class Hello{
  constructor(text){
    this.text=text;
  }
  affiche(){
    return "je contient:"+this.text;
  }
}
const he= new Hello("imededin");

 he.affiche(); 
  export default Hello;