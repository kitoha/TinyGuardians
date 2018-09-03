//var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, null);
 
var player;
var spacefield,spacefieldOff;
var right_button,left_button;
var left,right;
var timer,timerEvent,minute;
var txt;
var alphabets;
var arrayname;
var hpBar,hpBarBack,hpMax;
var playeGame;
var gameEndChk,endgameTxt;
var jellyLoop,endgameLoop,endgameBack;
var plusScore,curScoreTxt,curScore,bestScore,curTotalScore;
var collisionLeft,collisionBotton;
var missionList,missionChkBtn,missionBack,missionIsTrue,missionA,missionB,missionS;
var curStageTxt;
var stageMissionA,stageMissionB,stageMission;
var curstageMissionA,curstageMissionB,curstageMissionAStr,curstageMissionBStr,curstageTime,curstageMissionF;
var bg_Atxt,bg_Btxt;
var blackStroke,redGauge,redGaugeY,redGaugeHeight,redGaugeIsTrue;
var MathSymbolLoop,MathSymbols,MathName;
var style;
var gameMusic;
var gameStartIsTrue;

WebFont.load({
  google: {
    families: ['Dosis']
  }
});

var mainState=function(game){}

mainState.prototype={
 	preload:function() {
    // 게임에 필요한 데이터 로드
    	left=false;
   		right=false;
   		hpBar=null;
   		hpBarBack=null;
   		gameEndChk=false;
   		endgameTxt=null;
   		curScoreTxt=null;
   		curScore=0;
   		missionIsTrue=false;
   		bestScore=userBestScore;
   		playeGame=this.game;
   		curstageMissionA=0;
   		curstageMissionB=0;
   		curstageMissionF=0;
   		redGaugeIsTrue=false;
   		timer=null;
   		gameStartIsTrue=false;
    	this.game.load.image("bg_stage1","./asset/Design/design_asset/bg_stage1.png");
    	this.game.load.image("stage_off","./asset/Design/design_asset/stage_off.png");
    	this.game.load.image("bg_bottom","./asset/Design/design_asset/bg_bottom.png");
    	this.game.load.image("hpBar","./asset/Design/design_asset/top_scorefill.png");
    	this.game.load.image("hpBarBack","./asset/Design/design_asset/top_scoreoutline.png");
    	this.game.load.image("endgame","./asset/black55overlay.png");
    	this.game.load.image("top_timer","./asset/Design/design_asset/top_timer.png");

   		this.game.load.spritesheet("right_button","./asset/Design/design_asset/button_right.png");
    	this.game.load.spritesheet("left_button","./asset/Design/design_asset/button_left.png");
   	
   		this.game.load.image("A","./asset/Design/design_asset/alphabet_A.png");
   		this.game.load.image("B","./asset/Design/design_asset/alphabet_B.png");
   		this.game.load.image("C","./asset/Design/design_asset/alphabet_C.png");
   		this.game.load.image("D","./asset/Design/design_asset/alphabet_D.png");
   		this.game.load.image("F","./asset/Design/design_asset/alphabet_F.png");

   		this.game.load.image("effect_005","./asset/Design/design_asset/effect_005.png");
   		this.game.load.image("effect_010","./asset/Design/design_asset/effect_010.png");
   		this.game.load.image("effect_050","./asset/Design/design_asset/effect_050.png");
   		this.game.load.image("effect_105","./asset/Design/design_asset/effect_105.png");
   		this.game.load.image("effect_110","./asset/Design/design_asset/effect_110.png");

   		this.game.load.image("drop","./asset/Design/design_asset/drop.png");

   		this.game.load.image("body_board","./asset/Design/design_asset/body_board.png");
   		this.game.load.image("button_main","./asset/Design/design_asset/button_main.png");
   		this.game.load.image("button_next","./asset/Design/design_asset/button_next.png");
   		this.game.load.image("button_replay","./asset/Design/design_asset/button_replay.png");
   		this.game.load.image("button_ranking","./asset/Design/splash/button_ranking.png");

   		if(curStage==4) this.game.load.image("top_header","./asset/Design/design_asset/finalresultpg.png");
   		else this.game.load.image("top_header","./asset/Design/design_asset/resultpg.png");

   		this.game.load.image("mission_list","./asset/Design/misson/mission_list.png");
   		this.game.load.image("button_check","./asset/Design/misson/button_check.png");

   		this.game.load.image("black_stroke","./asset/Design/thermostat/black_stroke.png");
   		this.game.load.image("red_gauge","./asset/Design/thermostat/red_gauge.png");

   		this.game.load.image("zero","./asset/Design/math_symbol/01.png");
   		this.game.load.image("pi","./asset/Design/math_symbol/02.png");
   		this.game.load.image("sigma","./asset/Design/math_symbol/03.png");
   		this.game.load.image("plus","./asset/Design/math_symbol/04.png");
   		this.game.load.image("division","./asset/Design/math_symbol/05.png");
   		this.game.load.image("energydrink","./asset/Design/math_symbol/energydrink.png");


   		this.game.load.image("collisionLeft","./asset/collisionLeft.png");

   		this.game.load.spritesheet("teacher","./asset/Design/design_asset/teacher_on_off.png",245,210);

   		//if(curCharacter==0) this.game.load.spritesheet("player", "./asset/player.png", 200, 218); 
   		//else if(curCharacter==2) this.game.load.spritesheet("player", "./asset/catPlayer.png", 200, 175); 
   		console.log("curCharacter: "+ curCharacter);
   		if(curCharacter==0) this.game.load.spritesheet("player", "./asset/Design/design_asset/game_gothi.png",150,220); 
   		else if(curCharacter==1) this.game.load.spritesheet("player", "./asset/Design/design_asset/game_hamsik.png",122,220); 
   		else if(curCharacter==2) this.game.load.spritesheet("player", "./asset/Design/design_asset/game_byeongil.png",128,220); 

   		if(curCharacter==0) this.game.load.image("resultPlayer", "./asset/Design/design_asset/result_GOTHI.png"); 
   		else if(curCharacter==1) this.game.load.image("resultPlayer", "./asset/Design/design_asset/result_HAMSIK.png"); 
   		else if(curCharacter==2) this.game.load.image("resultPlayer", "./asset/Design/design_asset/result_BYEONGIL.png"); 

    	keyMove = this.game.input.keyboard.createCursorKeys(); 

    	this.game.load.audio("game_sound","./asset/Design/sound/POL-mad-run-short.mp3");
    },
 
	create:function() {
    	// 게임 처음 실행시 수행되는 함수
    	stageMissionA=[1,5,10,15];
    	stageMissionB=[5,10,10,15];
    	stageMission=[50,75,100,150];
    	//curstageTime=[30,60,90,120];
    	curstageTime=[30,50,70,90];

    	gameMusic=this.game.add.audio("game_sound");
    	gameMusic.loop=true;
   		this.game.physics.startSystem(Phaser.Physics.ARCADE);

   		spacefield=this.game.add.sprite(0,0,'bg_stage1');
   		spacefield.width=this.game.width;
   		spacefield.height=this.game.height-200;

   		spacefieldOff=this.game.add.sprite(0,0,'stage_off');
   		spacefieldOff.width=this.game.width;
   		spacefieldOff.height=this.game.height-200;
   		spacefieldOff.visible=false;

   		arrayname=["A","B","C","D","F"];
   		MathName=["zero","pi","sigma","plus","division","energydrink"];
   
   		alphabets=this.game.add.physicsGroup(Phaser.Physics.ARCADE);
   		MathSymbols=this.game.add.physicsGroup(Phaser.Physics.ARCADE);

   		teacher=this.game.add.sprite(this.game.world.centerX, 170,"teacher");
    	this.game.physics.arcade.enable(teacher);
 
    	teacher.body.collideWorldBounds = true;

    	teacher.body.bounce.setTo(0.9, 0.9);

    	blackStroke=this.game.add.sprite(this.game.world.centerX+180, 170,"black_stroke");
    	redGauge=this.game.add.sprite(this.game.world.centerX+186, 173,"red_gauge");
    	redGaugeY=redGauge.y;
    	redGaugeHeight=redGauge.height;
    	redGauge.y+=redGauge.height;
    	redGauge.height=0;

   		
		var bg_bottom=this.game.add.sprite(0,this.game.height-200,'bg_bottom');
		bg_bottom.width=this.game.width;

		var top_timer=this.game.add.sprite(0,0,'top_timer');

		var bg_bottomTxt=this.game.add.text(this.game.world.centerX-105,this.game.height-160,"STAGE "+curStage);
		bg_bottomTxt.fontSize=50;
        bg_bottomTxt.fill="#ffffff"
        bg_bottomTxt.stroke="#000000";
        bg_bottomTxt.strokeThickness = 10;

        curstageMissionAStr=curstageMissionA+"/"+stageMissionA[curStage-1];
        curstageMissionBStr=curstageMissionB+"/"+stageMissionB[curStage-1];

        bg_Atxt=this.game.add.text(this.game.world.width*0.393,this.game.height*0.943,curstageMissionAStr);
		bg_Atxt.fontSize=30;
        bg_Atxt.fill="#ffffff"
        bg_Atxt.stroke="#000000";
        bg_Atxt.strokeThickness = 10;

        bg_Btxt=this.game.add.text(this.game.world.width*0.583,this.game.height*0.943,curstageMissionBStr);
		bg_Btxt.fontSize=30;
        bg_Btxt.fill="#ffffff"
        bg_Btxt.stroke="#000000";
        bg_Btxt.strokeThickness = 10;

        collisionLeft=this.game.add.sprite(0, 0,"collisionLeft");
        collisionLeft.width=50;
        collisionLeft.height=this.game.height-200;
        this.game.physics.enable(collisionLeft, Phaser.Physics.ARCADE);
        collisionLeft.body.immovable = true;

        collisionBotton=this.game.add.sprite(0, this.game.height-200,"collisionLeft");
        collisionBotton.width=this.game.width;
        collisionBotton.height=10;
        this.game.physics.enable(collisionBotton, Phaser.Physics.ARCADE);
        collisionBotton.body.immovable = true;

 		timer=this.game.time.create();
 		timerEvent = timer.add(Phaser.Timer.SECOND * curstageTime[curStage-1], this.endTimer, this);
 		//timer.start();

    	player = this.game.add.sprite(this.game.width*0.03798, this.game.height*0.73759-5, "player");
    	this.game.physics.arcade.enable(player);
    	player.animations.add("left", [0, 1, 2,3,4,5,6,7,8,9]);    
    	player.animations.add("right", [10,11,12,13,14,15,16,17,18,19]);   
    	player.body.collideWorldBounds=true;
    	player.frame = 10;

  	 	this.right_button=this.game.add.button(this.game.width*(13/17),this.game.height-159,
    		"right_button",null,this,2,1,0);

  	 	this.left_button=this.game.add.button(this.game.width*(1/15),this.game.height-159,
    		"left_button",null,this,2,1,0);

  	  	this.left_button.events.onInputDown.add(this.left_over,this);
  	  	this.left_button.events.onInputUp.add(this.left_up,this);
  	
  	  	this.right_button.onInputDown.add(this.right_over,this);
  	  	this.right_button.onInputUp.add(this.right_up,this);

  	  

    	hpBar=this.game.add.sprite(288,this.game.world.centerY*(1/33)+5,"hpBar");
    	//hpBar.scale.setTo(1,1);
    	hpMax=hpBar.width;
    	hpBarBack=this.game.add.sprite(280,this.game.world.centerY*(1/33),"hpBarBack");

    	//jellyLoop=this.game.time.events.loop(Phaser.Timer.SECOND*1.5, this.updateJelly, this);
    	//endgameLoop=this.game.time.events.add(Phaser.Timer.SECOND * 30, this.endGame, this);

    	 style = {
     		 font: '40px Dosis',
     		 fill: '#fff',
    		};

        curScoreTxt=this.game.add.text(270,this.game.world.centerY*(1/33)+50,this.formatScore(curScore),style);
    	curScoreTxt.fontSize=40;
        curScoreTxt.fill="#ffffff"
       	curScoreTxt.stroke="#000000";
        curScoreTxt.strokeThickness = 13;
        curScoreTxt.fontWeight = 800;

        curScoreMX=this.game.add.text(270,this.game.world.centerY*(1/33)+50,stageMission[curStage-1],style);
    	curScoreMX.fontSize=40;
        curScoreMX.fill="#fbb632"
       	curScoreMX.stroke="#000000";
        curScoreMX.strokeThickness = 13;
        curScoreMX.fontWeight = 800;
        curScoreMX.x=270+curScoreTxt.width-7;

        var totalScoreStr="SUM: "+String(totalScore);
        curTotalScore=this.game.add.text(this.game.width*0.6170,this.game.world.centerY*(1/33)+50,totalScoreStr,style);
        curTotalScore.fontSize=40;
        curTotalScore.fill="#ffffff"
       	curTotalScore.stroke="#000000";
        curTotalScore.strokeThickness = 13;
        curTotalScore.fontWeight = 800;


    	missionBack=this.game.add.sprite(0,0,"endgame");
    	missionBack.width=this.game.width;
    	missionBack.height=this.game.height;
    	missionList=this.game.add.sprite(this.game.width*0.15,this.game.height*0.2,"mission_list");
    	missionList.width=this.game.width/1.41;
    	missionList.height=this.game.height/2.11;
    	missionChkBtn=this.game.add.button(this.game.width*0.33,this.game.height*0.7,
    		"button_check",null,this,2,1,0);

    	missionChkBtn.events.onInputUp.add(this.checkMission,this);

    	curStageTxt=this.game.add.text(this.game.world.width*0.357+30,this.game.height*0.215,"STAGE "+curStage,style);
    	curStageTxt.fontSize=65;
        curStageTxt.fill="#ffffff"
        curStageTxt.stroke="#000000";
        curStageTxt.strokeThickness = 10;
        curStageTxt.fontWeight=800;

    	missionA=this.game.add.text(this.game.world.width*0.47,this.game.height*0.40432-15,stageMissionA[curStage-1]+"개 이상");
    	missionA.fontSize=50;
        missionA.fill="#ffffff"
        missionA.stroke="#000000";
        missionA.strokeThickness = 10;

    	missionB=this.game.add.text(this.game.world.width*0.47,this.game.height*0.504-15,stageMissionB[curStage-1]+"개 이상");
    	missionB.fontSize=50;
        missionB.fill="#ffffff"
        missionB.stroke="#000000";
        missionB.strokeThickness = 10;

    	missionS=this.game.add.text(this.game.world.width*0.323,this.game.height*0.601-10,"SCORE "+stageMission[curStage-1]+" 이상");
    	missionS.fontSize=50;
        missionS.fill="#ffffff"
        missionS.stroke="#000000";
        missionS.strokeThickness = 10;

	},

	checkMission:function(){
		missionBack.kill();
    	missionList.kill();
    	missionChkBtn.kill();
    	curStageTxt.visible=false;
    	missionA.kill();
    	missionB.kill();
    	missionS.kill();

    	gameMusic.play();
		timer.start();
		gameStartIsTrue=true;
		jellyLoop=this.game.time.events.loop(Phaser.Timer.SECOND*1.5, this.updateJelly, this);
    	endgameLoop=this.game.time.events.add(Phaser.Timer.SECOND * curstageTime[curStage-1], this.endGame, this);
    	missionIsTrue=true;

	},

	render:function(){
		if (timer.running) {
			var style2 = {
     		 font: '80px Dosis',
     		 fill: '#fff',
    		};
			var str=this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
			if(txt!=null){
				txt.destroy()
			}
        	txt=this.game.add.text(110, 10,str,style2);
        	txt.stroke="#000000";
        	txt.strokeThickness = 10;
        	txt.fontWeight=800;
        	}
	},
 
	update:function() {
    // 프레임워크에서 주기적으로 수행하는 함수
    	if(!gameEndChk && missionIsTrue){
    		this.game.physics.arcade.collide(collisionLeft,alphabets);
    		this.game.physics.arcade.overlap(collisionBotton,MathSymbols,this.MathBottomKill,null,this);
    		if(plusScore!=null) plusScore.y-=1;

    		var totalScoreStr="SUM: "+String(totalScore+curScore);
    		curTotalScore.setText(totalScoreStr);
    		curScoreTxt.setText(this.formatScore(curScore));
    		curScoreMX.x=270+curScoreTxt.width;

      
    		if(!redGaugeIsTrue){
    			alphabets.forEach(function(item){
    				item.rotation+=0.02;
    				if(item.y<=100 || item.y>=(window.innerHeight-200)){
    					item.kill();
    				}
    			});
    		}


    		player.body.velocity.set(0); // 관성을 0으로 설정
			if(!redGaugeIsTrue){
				this.game.physics.arcade.overlap(player,alphabets,this.JellyKill,null,this);
				this.game.physics.arcade.collide(alphabets);
			}
			else{
				this.game.physics.arcade.overlap(player,MathSymbols,this.MathKill,null,this);
				this.game.physics.arcade.collide(MathSymbols);
			} 

		
 			if(left){
 				if(player.x>0){
 					var speed=500*curSpeed;
 					//console.log("speed: "+ speed+ " curSpeed : "+curSpeed);
 					player.body.velocity.x = -speed; 
 				} 
 				else{ 
 					player.body.velocity.x=0;
 					player.x=1;
 				}
     	  	 player.animations.play("left",50,true); 
 			}
 			else if(right){
 			 	if(player.x<this.game.width){
 			 		var speed=500*curSpeed;
 		 			player.body.velocity.x = speed; 
 				 } 
 				 else{
 		 			player.body.velocity.x=0;
 		 			player.x=this.game.width-1;
 				 } 
       			 player.animations.play("right",50,true); 
 			}
 			else{
 				player.animations.stop();      
     	  		player.frame = 10;              
 			}

 			if(!redGaugeIsTrue){
 				var tmp=hpBar.width;
				if(tmp>0){
					tmp=tmp-1;
					hpBar.width=tmp;
				}
				else{
					this.endGame();
					this.game.time.events.remove(endgameLoop);
				}
			}

			var gageTmp=redGauge.height;
			if(!redGaugeIsTrue){
				gageTmp=gageTmp+0.05;
				redGauge.height=gageTmp;
				redGauge.y-=0.05;
				teacher.frame=1;
				if(gageTmp>=redGaugeHeight){
					if(!redGaugeIsTrue)this.startMathSymbol();
					redGaugeIsTrue=true;
				}
			}
			else if(redGaugeIsTrue){
				gageTmp=gageTmp-0.15;
				redGauge.height=gageTmp;
				redGauge.y+=0.15;
				teacher.frame=0;
				if(gageTmp<=0){
					if(redGaugeIsTrue) this.startJelly();
					redGaugeIsTrue=false;
					redGauge.height=0;
				}
			}
 		}
 		else if(gameEndChk){
 			if((totalScore+curScore)>bestScore){
 				var userId=userInform.toString();
				db.child(userId).set({
					userName: userNickName,
					score: totalScore+curScore,
				});
 			}
 			
 			if(endgameBack.y>=-53){
 				if(endgameTxt==null){
 					endgameBack.body.velocity.y=0;
 					endgameBack.velocityY=0;
 					var str=this.scoreToAlpa();
 					var nextStageIsTrue=this.alpaToNext(str);

        			//var body_board=this.game.add.sprite(this.game.width*0.18-30,this.game.height*0.298,"body_board");
        			var top_header=this.game.add.sprite(this.game.width*0.18-30,this.game.height*0.145,"top_header");
        			top_header.width=this.game.width/1.41;
        			top_header.height=this.game.height/1.75;
        			var button_main=this.game.add.button(this.game.width*0.511,this.game.height*0.881,
    					"button_main",null,this,2,1,0);

        			button_main.width=this.game.width/2.05;
       				button_main.height=this.game.height/12.59;

        			var button_replay=null;
        			if(curStage==4){
        				var button_ranking=this.game.add.button(this.game.width*0.33021,this.game.height*0.732+10,
    					"button_ranking",null,this,2,1,0);
        				button_ranking.events.onInputDown.add(this.goRanking,this);
        			}
        			else{
        				button_replay=this.game.add.button(this.game.width*0.18-30,this.game.height*0.732+10,
    					"button_replay",null,this,2,1,0);
    					button_replay.events.onInputDown.add(this.ReGame,this);
        			}

        			if(curstageMissionF<2 && curstageMissionA>=stageMissionA[curStage-1] && curstageMissionB>=stageMissionB[curStage-1] && nextStageIsTrue && curStage<4){
        				var button_next=this.game.add.button(this.game.width*0.51+15,this.game.height*0.732+10,
    					"button_next",null,this,2,1,0);
    					button_next.events.onInputDown.add(this.goNextGame,this);
        			}
        			else{
        				if(button_replay!=null) button_replay.x=this.game.width*0.33021;
        			}

        			button_main.events.onInputDown.add(this.goMain,this);


        			var resultCharacter=this.game.add.sprite(this.game.width*0.577,this.game.height*0.356,"resultPlayer");
        			
        			if(curStage<4){
        				var finalTxt=this.game.add.text(this.game.world.width*0.236,this.game.height*0.65-15,
        					"FINAL SCORE");
        				finalTxt.fontSize=30;
       					finalTxt.fill="#ffffff"
        				finalTxt.stroke="#000000";
        				finalTxt.strokeThickness = 10;

        				var finalStr=String(curScore)+"/";
        				var finalScoreTxt=this.game.add.text(this.game.world.width*0.67,this.game.height*0.65-25,
        					finalStr);

        				finalScoreTxt.fontSize=30;
       					finalScoreTxt.fill="#ffffff"
        				finalScoreTxt.stroke="#000000";
        				finalScoreTxt.strokeThickness = 10;
        				finalScoreTxt.x=this.game.world.width*0.67-((String(finalStr).length-1)*5);
        			
        				var finalScoreMax=this.game.add.text(this.game.world.width*0.67,this.game.height*0.65-25,
        					stageMission[curStage-1]);
        				finalScoreMax.fontSize=30;
       					finalScoreMax.fill="#fbb632"
        				finalScoreMax.stroke="#000000";
        				finalScoreMax.strokeThickness = 10;

        				finalScoreMax.x=finalScoreTxt.x+finalScoreTxt.width;

        				var resultStageTxt=this.game.add.text(this.game.width*0.392-20,this.game.height*0.177-10,
        					"STAGE "+curStage);
        				resultStageTxt.fontSize=65;
       					resultStageTxt.fill="#ffffff"
        				resultStageTxt.stroke="#000000";
        				resultStageTxt.strokeThickness = 10;
        			}
        			else{
        				stageScoreSet.push(curScore);
        				var stageAllTxt=[];
        				var widthDiff=[0.25510,0.39484,0.53883,0.68225];

        				for(var i=0;i<stageScoreSet.length;i++){
        					console.log("score: "+stageScoreSet[i]);
        					stageAllTxt[i]=this.game.add.text(this.game.width*widthDiff[i]+7,this.game.height*0.63873,
        					stageScoreSet[i]);
        					stageAllTxt[i].fontSize=30;
       						stageAllTxt[i].fill="#ffffff"
        					stageAllTxt[i].stroke="#000000";
        					stageAllTxt[i].strokeThickness = 10;
        				}

        			}

        			var styleAlpa = {
     				 font: '200px Dosis',
     				 fill: '#fff',
    				};
        			endgameTxt=this.game.add.text(this.game.width*0.33+30, this.game.height*0.37-20,str,styleAlpa);
       	 			endgameTxt.fontSize=200;
        			endgameTxt.fill="#ffffff"
       	 			endgameTxt.stroke="#000000";
        			endgameTxt.strokeThickness = 10;
        			endgameTxt.fontWeight=800;
       			 }
 				}
 			}

	},

	goMain:function(){

		this.game.state.start('start');
	},

	endTimer: function() {
        // Stop the timer when the delayed event triggers
        timer.stop();
    },
    goRanking:function(){
    	this.startCreateRankingBoard();
    	//this.game.state.start('leaderboard');
    },
    startCreateRankingBoard:function(){

		leaderGame=this.game;
		RankingNum=[];
		RankingName=[];
		RankingScore=[];
		startNum=0;
		endNum=10;

		var background=this.game.add.sprite(0,0,'rankingBg');
        	background.width=this.game.width;
       		background.height=this.game.height;

       	var RankinngChart=this.game.add.sprite(this.game.width*0.16,this.game.height*0.15,"Rankinng_chart");
       	RankinngChart.width=this.game.width/1.50;
       	RankinngChart.height=this.game.height/1.50;

       	var rankingleftBtn=this.game.add.button(this.game.width*0.05-10,this.game.height*0.5,"button_rankingleft",null,this,2,1,0);
       	var rankingrightBtn=this.game.add.button(this.game.width*0.83+25,this.game.height*0.5,"button_rankingright",null,this,2,1,0);

       	var button_main=this.game.add.button(this.game.width*0.511,this.game.height*0.881,
    					"button_main",null,this,2,1,0);

       	button_main.width=this.game.width/2.05;
       	button_main.height=this.game.height/12.59;


       	button_main.events.onInputUp.add(this.goMain,this);
       	rankingleftBtn.events.onInputUp.add(this.rankingleftSet,this);
       	rankingrightBtn.events.onInputUp.add(this.rankingrightSet,this);
       	var hDiff=0.312;

       	var style = {
     		 font: '40px Dosis',
     		 fill: '#fff',
    		};

       	for (var i = 0; i < 11; i++){
			if(i==0) RankingNum[i]=this.game.add.text(this.game.width*0.207+3, this.game.height*hDiff, ' ',style);
			else RankingNum[i]=this.game.add.text(this.game.width*0.207, this.game.height*hDiff, ' ',style);
			RankingNum[i].fontSize=39;
       		RankingNum[i].fill="#fbb632";
       		RankingNum[i].stroke="#000000";
       		RankingNum[i].strokeThickness = 7;
       		RankingNum[i].fontWeight = 800;
 
			hDiff+=0.0455;
		}

		hDiff=0.312;
		for (var j = 0; j < 11; j++){
			RankingName[j]=this.game.add.text(this.game.width*0.354-3, this.game.height*hDiff, ' ');
			RankingName[j].fontSize=39;
       		RankingName[j].fill="#ffffff";
       		RankingName[j].stroke="#000000";
       		RankingName[j].strokeThickness = 7;
       		RankingName[j].fontWeight = 800;
       		if(j==10){
       			colorText=this.game.add.text(this.game.width*0.354-3, this.game.height*hDiff, '(YOU)');
       			colorText.fontSize=39;
       			colorText.fill="#fbb632";
       			colorText.stroke="#000000";
       			colorText.strokeThickness = 7;
       			colorText.fontWeight = 800;
       			colorText.visible=false;
       		}

			hDiff+=0.0455;
		}

		hDiff=0.312;
		for (var k = 0; k < 11; k++){
			RankingScore[k]=this.game.add.text(this.game.width*0.765-5, this.game.height*hDiff, ' ',style);
			RankingScore[k].fontSize=39;
       		RankingScore[k].fill="#ffffff";
       		RankingScore[k].stroke="#000000";
       		RankingScore[k].strokeThickness = 7;
       		RankingScore[k].fontWeight = 800;

			hDiff+=0.0455;
		}


       	setUserListPlay(0,10);

	},

	rankingrightSet:function(){
		startNum+=10;
		endNum+=10;
		console.log("length : "+ playerScoreSet.length+" startNum: "+startNum);
		if(playerScoreSet.length>startNum) displayInform(startNum,endNum);
		else{
			startNum-=10;
			endNum-=10;
		}
	},

	rankingleftSet:function(){
		startNum-=10;
		endNum-=10;

		if(startNum>=0) displayInform(startNum,endNum);
		else{
			startNum+=10;
			endNum+=10;
		}
	},

	setRankingTxt:function(start,end){
			console.log("set setRankingTxt");
			var cnt=0;
			for (var i = start; i < start+11; i++){
				if(i==(start+10)) RankingNum[cnt].setText(String(myRanking));
				else RankingNum[cnt].setText(String(i+1));
				cnt++;
			}

			RankingName[10].setText(userNickName);
			RankingScore[10].setText(String(userBestScore));
			RankingScore[10].x=(playeGame.width*0.765-5)-(String(userBestScore).length-1)*15;
			colorText.x=(playeGame.width*0.354-3)+RankingName[10].width+3;
			colorText.visible=true;
	},



    goNextGame:function(){
    	totalScore+=curScore;
    	stageScoreSet.push(curScore);
    	curStage++;
    	this.game.state.start('main');
    },

    scoreToAlpa:function(){
    	if(curScore>=stageMission[curStage-1]+50) return 'A';
    	else if(curScore>=stageMission[curStage-1]) return 'B';
    	else if(curScore>=stageMission[curStage-1]-10==0?0:stageMission[curStage-1]-10) return 'C';
    	else if(curScore>=stageMission[curStage-1]-20==0?0:stageMission[curStage-1]-20) return 'D';
    	else return 'F';
    },

    alpaToNext:function(alpa){
    	if(alpa=="C" ||alpa=="D" || alpa=="F") return false;
    	else return true;
    },

    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 120);
        var seconds = "0" + (s - minutes * 120);
        if(curStage==4) return seconds.substr(-2);
        else return seconds.substr(-2);   
    },

    formatScore: function(s){
    	return "SCORE : "+s+"/";
    },

    formatBestScore: function(s){
    	return "BESTSCORE:"+s;
    },

    MathBottomKill:function(bottom,math){
    	math.kill();
    },

    MathKill:function(player,math){
    	var upHp=0.0;
		var perSent=0;

		if(math.name==MathName[5]){
			curScore+=10;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_110");
		}
		else{
			curScore=(curScore-5)<0?0:curScore-5;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_005");
		}

		this.game.add.tween(plusScore).to( { alpha: 0 }, 2000, "Linear", true);

		math.kill();
    },

    JellyKill:function(player,alphabet){
		var upHp=0.0;
		var perSent=0;
      	
      	var Probality=Math.random() * 1;
      	//console.log("pro: "+Probality);
      	var dropIsTrue=this.getProbabilityMethod(curGetProbality,Probality);

      	if(!dropIsTrue){
      		plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"drop");
      		
      		if(alphabet.name==arrayname[0]){
      			perSent=30/100;
				upHp=hpMax*perSent;
      		}
      		else if(alphabet.name==arrayname[1]){
      			perSent=20/100;
				upHp=hpMax*perSent;
      		}
      	}
      	else{

		if(alphabet.name==arrayname[0]){
			perSent=30/100;
			upHp=hpMax*perSent;
			curScore+=10;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_110");
			curstageMissionA++;
			curstageMissionAStr=curstageMissionA+"/"+stageMissionA[curStage-1];
			bg_Atxt.x=this.game.world.width*0.393-((String(curstageMissionAStr).length-1)*5);
			bg_Atxt.setText(curstageMissionAStr);
		}
		else if(alphabet.name==arrayname[1]){
			perSent=20/100;
			upHp=hpMax*perSent;
			curScore+=5;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_105");
			curstageMissionB++;
			curstageMissionBStr=curstageMissionB+"/"+stageMissionB[curStage-1];
			bg_Btxt.x=this.game.world.width*0.583-((String(curstageMissionBStr).length-1)*5);
			bg_Btxt.setText(curstageMissionBStr);
		}
		else if(alphabet.name==arrayname[2]){
			perSent=10/100;
			upHp=hpMax*perSent;
			curScore=(curScore-5)<0?0:curScore-5;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_005");
		}
		else if(alphabet.name==arrayname[3]){
			perSent=10/100;
			upHp=hpMax*perSent;
			curScore=(curScore-10)<0?0:curScore-10;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_010");
		}
		else if(alphabet.name==arrayname[4]){
			perSent=0;
			upHp=hpMax*perSent;
			curScore=(curScore-50)<0?0:curScore-50;
			curstageMissionF++;
			plusScore=this.game.add.sprite(player.world.x+player.width, player.world.y,"effect_050");
		}

		if(upHp+hpBar.width>=hpMax) hpBar.width=hpMax;
		else hpBar.width=hpBar.width+upHp;
		}
		this.game.add.tween(plusScore).to( { alpha: 0 }, 2000, "Linear", true);
		
		if(curstageMissionF>=2) this.endGame();
		alphabet.kill();
	},
	
	left_over:function(){
		//console.log("speed: "+curSpeed);
 		left=true;
	},
	left_up:function(){
		left=false;
	},

	right_over:function(){
		right=true;
	},
	right_up:function(){
		right=false;
	},

	getProbabilityMethod:function(myProbality,curProbality){
		if(curProbality<=myProbality) return true;
		else return false;
	},

	startMathSymbol:function(){
		spacefieldOff.visible=true;
		timer.pause();
		this.game.time.events.remove(endgameLoop);
		this.game.time.events.remove(jellyLoop);
   		alphabets.forEach(function(item){
 			item.kill();
    	});

    	teacher.x=this.game.world.centerX-100;
    	blackStroke.x=teacher.x+180;
    	redGauge.x=teacher.x+185;
    	MathSymbolLoop=this.game.time.events.loop(Phaser.Timer.SECOND*0.5, this.updateMathSymbol, this);
	},

	updateMathSymbol:function(){
		var MathSymbol;
		var result = Math.floor(Math.random() * (window.innerWidth-100));
		var curVal=Math.floor(Math.random() * 100)+1;
		var index;
		if(curVal>=59){
			index=5;
		}
		else{
			index=Math.floor(Math.random() * 5);
		}

		MathSymbol=MathSymbols.create(result,teacher.y*2,MathName[index]);
		MathSymbol.name=MathName[index];
   		MathSymbol.body.velocity.y=350;

   		MathSymbols.setAll('body.collideWorldBounds', true);
  	 	MathSymbols.setAll('body.bounce.x',1);
   		MathSymbols.setAll('body.bounce.y',1);
	},

	startJelly:function(){
		spacefieldOff.visible=false;
		timer.resume();

		this.game.time.events.remove(MathSymbolLoop);
   		MathSymbols.forEach(function(item){
 			item.kill();
    	});
    	var curTime=this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
    	var curTimetoInt=parseInt(curTime);
    	jellyLoop=jellyLoop=this.game.time.events.loop(Phaser.Timer.SECOND*1.5, this.updateJelly, this);
    	endgameLoop=this.game.time.events.add(Phaser.Timer.SECOND *curTimetoInt , this.endGame, this);
	},

	updateJelly:function(){
		var result = Math.floor(Math.random() * (window.innerWidth-teacher.width));
		var itemCount=Math.floor(Math.random() * 3);
		teacher.body.velocity.set(0);
		teacher.x=result;
		blackStroke.x=teacher.x+180;
    	redGauge.x=teacher.x+185;

		var diff=0;
		var velocityX=[-280,0,280];
		var velocityY=[275,275,275];
		for(var i=0;i<itemCount+1;i++){
			var curVal=Math.floor(Math.random() * 100)+1;
			var curIndex=this.getProbability(curVal);
   			var alphabet=alphabets.create(teacher.x+diff,teacher.y*2,arrayname[curIndex]);
   			//playeGame.physics.arcade.enable(alphabet,Phaser.Physics.ARCADE);
   			alphabet.name=arrayname[curIndex];
   			alphabet.body.velocity.y=velocityY[i];
   			alphabet.body.velocity.x=velocityX[i];
   			diff+=75;
   		}

   		alphabets.setAll('body.collideWorldBounds', true);
  	 	alphabets.setAll('body.bounce.x',1);
   		alphabets.setAll('body.bounce.y',1);
   },

   getProbability:function(val){
   	if(val<=30) return 0;
   	else if(val<=80) return 1;
   	else if(val<=90) return 2;
   	else if(val<=95) return 3;
   	else return 4;
   },

   endGame:function(){
   	endgameBack=this.game.add.sprite(0,0-this.game.height,'endgame');
   	endgameBack.width=this.game.width;
   	endgameBack.height=this.game.height;
   	this.game.physics.arcade.enable(endgameBack);
   	endgameBack.body.velocity.y=2000;
   	timer.stop();
   	this.game.time.events.remove(jellyLoop);
   	alphabets.forEach(function(item){
 			item.kill();
    	});

   	player.frame = 10;
   	this.game.time.events.remove(MathSymbolLoop);
   		MathSymbols.forEach(function(item){
 			item.kill();
    	});
   	player.body.velocity.x=0;
   	player.animations.stop();      
    player.frame = 5;    
   	gameEndChk=true;
   	gameMusic.destroy();
   },

   ReGame:function(){
   	this.game.state.start('main');
   }
};

function displayInformPlay(mn,mx){
    	return new Promise(function(resolve, reject) {
    		var st=mn;
			var ed=playerScoreSet.length<mx?playerScoreSet.length:mx;
			var cnt=0;
			console.log("userList: "+userList.length);
    		for(var i=st;i<ed;i++){
    			RankingName[cnt].setText(String(userList[i]));
  				RankingScore[cnt].x=(playeGame.width*0.765-5)-(String(scoreList[i]).length-1)*15;
  				RankingScore[cnt].setText(String(scoreList[i]));
  				cnt++;
    		}
    		if(cnt<10){
    			for(var i=cnt;i<10;i++){
    				RankingName[i].setText('');
  					RankingScore[i].setText('');
    			}
    		}

    		console.log("set displayInform");
    		resolve(mainState.prototype.setRankingTxt(st,ed));

    		}).then(function() {
      			console.info('RUN LAST')
    	})
    }

function setUserListPlay(mn,mx){
		var cnt=0;
		return new Promise(function(resolve, reject) {
			for (var key in playerScoreSet) {
				/*if(cnt>=(ed-st)){
					console.log("b\n");
					break;
				}*/
				
  				var value = playerScoreSet[key];
  				
  				userList.push(value[0]);
				scoreList.push(value[1]);
  				//RankingName[cnt].setText(value[0]);
  				//RankingScore[cnt].x-=(String(value[1]).length-1)*15;
  				//RankingScore[cnt].setText(value[1]);
       			//cnt++;

  			}

  			resolve(displayInformPlay(mn,mx));

			}).then(function() {
      			console.info('RUN LAST')
    	})
	}



