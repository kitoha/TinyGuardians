
var characterName=["Gothi","Hamsik","Byeongil"];
var characterDiff=[0,300,600];
var characterDiscription,characterCommend;
var characters;
var curCharacter,curSpeed,curGetProbality;
var selection_button;
var ham,duck,dochy;
var pick,description,smallDescription;
var characterTxt,totalScore;
var curStage,stageScoreSet;


var selectCharacterState=function(game){}

selectCharacterState.prototype={

	preload:function(){
    totalScore=0;
    curStage=1;
    characterDiscription=[];
    stageScoreSet=[];
    characterTxt=null;
    smallCharacterTxt=null;
    characterCommend=["gothi_comment","hamsik_comment","byeongil_comment"];

		this.game.load.spritesheet("Hamsik","./asset/Design/selection/HAMSIK_ANI.png",200,270);
		this.game.load.spritesheet("Byeongil","./asset/Design/selection/BYEONGIL_ANI.png",200,270);
		this.game.load.spritesheet("Gothi","./asset/Design/selection/GOTHI_ANI.png",200,270);
		this.game.load.image("background","./asset/Design/selection/background.png");
		this.game.load.image("selectionpg","./asset/Design/selection/selectionpg.png");
		this.game.load.image("button_selection","./asset/Design/selection/button_selectiondone.png");
		this.game.load.image("top_selectiontitle","./asset/Design/selection/top_selectiontitle.png");
		this.game.load.image("pick","./asset/Design/selection/pick.png");
		this.game.load.image("star_fill","./asset/Design/selection/star_fill.png");
		this.game.load.image("star_unfill","./asset/Design/selection/star_unfill.png");

    this.game.load.image("gothi_comment","./asset/Design/selection/gothi_comment.png");
    this.game.load.image("hamsik_comment","./asset/Design/selection/hamsik_comment.png");
    this.game.load.image("byeongil_comment","./asset/Design/selection/byeongil_comment.png");
	},

	create:function(){
		
        var background=this.game.add.sprite(0,0,'background');
        background.width=this.game.width;
        background.height=this.game.height;

        var top_selectiontitle=this.game.add.sprite(0,0,'top_selectiontitle');

        var selectionpg=this.game.add.sprite(this.game.width*0.057,this.game.height*0.13,'selectionpg');
        selectionpg.width=this.game.width*0.89;
        selectionpg.height=this.game.height*0.67;

        this.selection_button=this.game.add.button(this.game.width*0.31,this.game.height*0.875,
    		"button_selection",null,this,2,1,0);

        this.selection_button.onInputUp.add(this.selectionCharacter,this);

        characters=this.game.add.group();
        var heightDiff=25;
          for(var i=0;i<3;i++){
          	if(i==2) heightDiff=20;
          	var character=characters.create((this.game.width*0.11-15) + (i*273)+35, this.game.height *0.2-heightDiff, characterName[i]);
            this.game.physics.arcade.enable(character);
          	character.name=characterName[i];
            character.animations.add("on", [1, 2, 3,4,5,6,7,8,9,10]);  
          	character.inputEnabled = true;
          	character.events.onInputDown.add(this.characterChk, this);
            if(i==0){
              character.x-=15;
              character.animations.play("on",50,true); 
            } 
            else{
              character.frame=0;
            }
          }

          curCharacter=0;
          curSpeed=2/5;
          curGetProbality=1;
          pick=this.game.add.sprite(this.game.width*0.06+15,this.game.height*0.182-65,'pick');

          this.starCreate();

          for(var i=0;i<3;i++){
            characterDiscription[i]=this.game.add.sprite(this.game.width*0.1+35, this.game.height*0.58+7,characterCommend[i]);
            if(i!=0)characterDiscription[i].visible=false;
          }
        
	},

	update:function(){
    
	},

	characterChk:function(character){

		if(pick!=null) pick.destroy();

		if(character.name==characterName[0]){
			curCharacter=0;
      curSpeed=2/5;
      curGetProbality=1;
			pick=this.game.add.sprite(this.game.width*0.06+15,this.game.height*0.182-65,'pick');
		}
		else if(character.name==characterName[1]){
			curCharacter=1;
      curSpeed=3/5;
      curGetProbality=3/5;
			pick=this.game.add.sprite(this.game.width*0.35,this.game.height*0.182-65,'pick');
		}
		else if(character.name==characterName[2]){
			curCharacter=2;
      curSpeed=1;
      curGetProbality=2/5;
			pick=this.game.add.sprite(this.game.width*0.65-25,this.game.height*0.182-65,'pick');
		}

    characters.forEach(function(item) {
      item.animations.stop();   
      item.frame=0;
    });

    for(var i=0;i<3;i++){
      if(i==curCharacter) characterDiscription[i].visible=true;
      else characterDiscription[i].visible=false;
    }

    character.animations.play("on",50,true); 

		this.starCreate();
	},

	selectionCharacter:function(){
		this.game.state.start('main');
	},

	starCreate:function(){
		var runCount,accuracyCount;
		var runStars=this.game.add.group();
		var accuracyStars=this.game.add.group();

		if(curCharacter==0){
			runCount=2;
			accuracyCount=5;
		}
		else if(curCharacter==1){
			runCount=3;
			accuracyCount=3;
		}
		else if(curCharacter==2){
			runCount=5;
			accuracyCount=2;
		}

		var diff=50;
		for(var i=0;i<5;i++){
			var star;
			if(i<runCount) star=runStars.create(this.game.width*0.2-35+(i*diff), this.game.height*0.47+50,"star_fill");
			else star=runStars.create(this.game.width*0.2-35+(i*diff), this.game.height*0.47+50,"star_unfill");
		}

		for(var i=0;i<5;i++){
			var star;
			if(i<accuracyCount) star=accuracyStars.create(this.game.width*0.6-35+(i*diff), this.game.height*0.47+50,"star_fill");
			else star=accuracyStars.create(this.game.width*0.6-35+(i*diff), this.game.height*0.47+50,"star_unfill");
		}
	}
};