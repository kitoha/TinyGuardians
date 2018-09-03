
var kakaoLoginTxt;
var startEdge;
var nickNameIsTrue;
var userNickName,userBestScore;
var userInform;
var loadingOuter,loadingFill,loadingComment,loadingProgress,ProgressMax;
var DataMax;
var leaderBoard,buttonRanking,buttonStart;
var total,myMaxNum,myRanking,totalShow,myMaxNumShow,myRankingShow;
var playerScoreSet;

var RankingNum,RankingName,RankingScore,colorText;
var leaderGame,startNum,endNum;
var mainMusic;
var userList,scoreList;
var licenseBtn,licenseClose,licensList;


WebFont.load({
  google: {
    families: ['Dosis']
  }
});

var startState=function(game){}

startState.prototype={
	preload:function(){
		total=0;
		loadingProgress=0;
		playerScoreSet=[];
		nickNameIsTrue=false;
		userList=[];
		scoreList=[];
		this.game.load.image("button_play","./asset/Design/selection/button_play.png");
		this.game.load.image("background","./asset/Design/splash/splashpg.png");
		this.game.load.image("gauge_outer","./asset/Design/splash/gauge_outer.png");
		this.game.load.image("gauge_fill","./asset/Design/splash/gauge_fill.png");
		this.game.load.image("comment","./asset/Design/splash/comment.png");
		this.game.load.image("leaderboard","./asset/Design/splash/leaderboard.png");
		this.game.load.image("button_ranking","./asset/Design/splash/button_ranking.png");
		this.game.load.image("button_start","./asset/Design/splash/button_start.png");

		this.game.load.image("Rankinng_chart","./asset/Design/design_asset/Rankinng_chart.png");
		this.game.load.image("button_rankingleft","./asset/Design/design_asset/button_rankingleft.png");
		this.game.load.image("button_rankingright","./asset/Design/design_asset/button_rankingright.png");
		this.game.load.image("rankingBg","./asset/black55overlay.png");

		this.game.load.image("button_main","./asset/Design/design_asset/button_main.png");

		this.game.load.audio("main_sound","./asset/Design/sound/POL-pet-park-short.mp3");

		this.game.load.image("license_Close","./asset//Design/splash/license_Close.png");
		this.game.load.image("licens_List","./asset//Design/splash/licens_List.png");
		this.game.load.image("license_Btn","./asset//Design/splash/button_information.png");

	},

	create:function(){
		startEdge=this.game;
		/*db.once('value',function(snapshot){
			snapshot.forEach(function(childSnapshot){
				console.log(childSnapshot.key + " "+ childSnapshot.val());
			});
		});*/
		
		/*dbRef.on('value',snap=>{
			var workoutsJSON = JSON.stringify(snap.val(), null);
			console.log(workoutsJSON);
		});*/

		var style = {
     		 font: '40px Dosis',
     		 fill: '#fff',
    		};

		var background=this.game.add.sprite(0,0,'background');
        	background.width=this.game.width;
       		background.height=this.game.height;

       	totalShow=this.game.add.text(this.game.width*0.82, this.game.height*0.67-7," ");
       	totalShow.fontSize=39;
       	totalShow.fill="#ffffff";
       	totalShow.stroke="#000000";
       	totalShow.strokeThickness = 7;
       	totalShow.fontWeight = 800;

       	myMaxNumShow=this.game.add.text(this.game.width*0.82, this.game.height*0.73-7," ");
       	myMaxNumShow.fontSize=39;
       	myMaxNumShow.fill="#ffffff";
       	myMaxNumShow.stroke="#000000";
       	myMaxNumShow.strokeThickness = 7;
       	myMaxNumShow.fontWeight = 800;

       	myRankingShow=this.game.add.text(this.game.width*0.82, this.game.height*0.793-7," ");
       	myRankingShow.fontSize=39;
       	myRankingShow.fill="#ffffff";
       	myRankingShow.stroke="#000000";
       	myRankingShow.strokeThickness = 7;
       	myRankingShow.fontWeight = 800;

       	kakaoLoginTxt=this.game.add.text(this.game.width*0.27, this.game.height*0.7,"Currently logging on to Kakao.",style);
       	kakaoLoginTxt.fontSize=39;
       	kakaoLoginTxt.fill="#ffffff";
       	kakaoLoginTxt.stroke="#000000";
       	kakaoLoginTxt.strokeThickness = 13;
       	kakaoLoginTxt.fontWeight = 800;

       	loadingOuter=this.game.add.sprite(this.game.width*0.12,this.game.height*0.77,"gauge_outer");
       	loadingFill=this.game.add.sprite(this.game.width*0.12+8,this.game.height*0.77+5,"gauge_fill");
       	loadingComment=this.game.add.sprite(this.game.width*0.32,this.game.height*0.813,"comment");
       	ProgressMax=loadingFill.width;
       	loadingFill.width=0;

        leaderBoard=this.game.add.sprite(this.game.width*0.09,this.game.height*0.65,"leaderboard");
  		buttonRanking=this.game.add.button(this.game.width*0.15,this.game.height*0.87,"button_ranking",null,this,2,1,0);
  		buttonStart=this.game.add.button(this.game.width*0.517,this.game.height*0.87,"button_start",null,this,2,1,0);

  		licenseBtn=this.game.add.button(this.game.width*0.03995,this.game.height*0.0225,"license_Btn",null,this,2,1,0);

  		licenseBtn.events.onInputUp.add(this.showLisence,this);

  		licenseBg=this.game.add.sprite(0,0,'rankingBg');
  		licenseBg.width=this.game.width;
       	licenseBg.height=this.game.height;

  		licenseClose=this.game.add.button(this.game.width*0.35,this.game.height*0.68373,"license_Close",null,this,2,1,0);
  		licensList=this.game.add.sprite(this.game.width*0.16121,this.game.height*0.32636,"licens_List");

  		licenseClose.events.onInputUp.add(this.closeLisence,this);

  		buttonStart.events.onInputUp.add(this.startGame,this);
  		buttonRanking.events.onInputUp.add(this.showRanking,this);
  		leaderBoard.visible=false;
  		buttonRanking.visible=false;
  		buttonStart.visible=false;
  		totalShow.visible=false;
  		myMaxNumShow.visible=false;
  		myRankingShow.visible=false;

  		licenseBtn.visible=false;
  		licenseBg.visible=false;
  		licenseClose.visible=false;
  		licensList.visible=false;

  		mainMusic=this.game.add.audio("main_sound");
  		mainMusic.loop=true;
       	
       	if(!this.kakaoIsTrue) this.loginWithKakao();
       	else chkId();
	},

	update:function(){

	},

	showLisence:function(){
		licenseBg.visible=true;
  		licenseClose.visible=true;
  		licensList.visible=true;
	},


	closeLisence:function(){
		licenseBg.visible=false;
  		licenseClose.visible=false;
  		licensList.visible=false;
	},

	showRanking:function(){
		//this.game.state.start('leaderboard');
		this.startCreateRankingBoard();
	},

	startGame:function(){
		mainMusic.destroy();
		this.game.state.start('selectCharacter');
	},

	createGameMain:function(){

		licenseBtn.visible=true;

		kakaoLoginTxt.visible=false;
		loadingOuter.visible=false;
		loadingFill.visible=false;
		loadingComment.visible=false;

		leaderBoard.visible=true;
  		buttonRanking.visible=true;
  		buttonStart.visible=true;
  		totalShow.visible=true;
  		myMaxNumShow.visible=true;
  		myRankingShow.visible=true;

  		var curTotal,curRank,curMaxNUM;

  		if(total==0) curTotal="-";
  		else curTotal=total+"점";

  		if(userBestScore==0){
  			curRank="-";
  			curMaxNUM="-";
  		} 
  		else{
  		 curRank=String(myRanking)+"등";
  		 curMaxNUM=String(userBestScore)+"점";
  		}

  		totalShow.x-=(String(total).length-1)*15;
  		totalShow.setText(curTotal);

  		myMaxNumShow.x-=(String(userBestScore).length-1)*15;
  		myMaxNumShow.setText(curMaxNUM);

  		myRankingShow.x-=(String(myRanking).length-1)*15;
  		myRankingShow.setText(curRank);

  		mainMusic.play();

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


       	setUserList(startNum,endNum);

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
			RankingScore[10].x=(startEdge.width*0.765-5)-(String(userBestScore).length-1)*15;
			colorText.x=(startEdge.width*0.354-3)+RankingName[10].width+3;
			colorText.visible=true;
	},

	goMain:function(){
		mainMusic.destroy();
		this.game.state.start('start');
	},

	loginWithKakao:function() {
		this.kakaoIsTrue=true;
		Kakao.init('fe69d80e59e71cd234e31f1e5873bf2c');
      // 로그인 창을 띄웁니다.
   
      Kakao.Auth.login({
        success: function(authObj) {
        	Kakao.API.request({
     	   	url: '/v1/user/me',
     	   	 success: function(res) { 
            userInform=res.id;
            userNickName=res.properties['nickname'];
            kakaoLoginTxt.setText("Kakao login succeeded.");
           chkId();
     	   	 }
     	   	})
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      });
    },


};

function setUserInform(){
		if(!nickNameIsTrue){
			var userId=userInform.toString();
			db.child(userId).set({
			userName: userNickName,
			score: 0,
			});

			userBestScore=0;
			playerScoreSet.push([userNickName,0]);
		}
		
		return new Promise(function(resolve, reject) {
			playerScoreSet.sort(sortFuction);
			function sortFuction(a,b){
				if(a[1]==b[1]) return 0;
				else return (a[1] > b[1]) ? -1 : 1;
			}

			for (var key in playerScoreSet) {
  				var value = playerScoreSet[key];
  				if(value[0]==userNickName){
  					myRanking=parseInt(key)+1;
  				}
  				console.log("key: "+key+" val: "+value[0]+" val2: "+value[1]);
  			}

			setTimeout(function() {
    			resolve(startState.prototype.createGameMain());
  			}, 1000);
		}).then(function() {
      			console.info('RUN LAST')
    	})
		
	}

function chkId(){
		kakaoLoginTxt.x+=50;
 		kakaoLoginTxt.setText("Checking database.");
 		db.once('value').then(function(snapshot) {
 			DataMax=snapshot.numChildren();
 			console.log('num child ' + snapshot.numChildren());
    		var myFunctToRunAfter = function () {
     			 console.info('RUN AFTER THE LOOP')
     			 console.log(ProgressMax);
     			 loadingFill.width=ProgressMax;
     			 this.setUserInform();
    			}

    		return new Promise(function(resolve, reject) {
     				 snapshot.forEach(function(child) {
     				 	loadingProgress++;
     				 	loadingFill.width=loadingProgress/DataMax;
     				 	if(child.key==userInform){
     				 		 nickNameIsTrue=true;
     				 		 child.forEach(function(snapshotChild){
     				 		 	if(snapshotChild.key=="score") userBestScore=snapshotChild.val();
     				 		 	else if(snapshotChild.key=="userName") userNickName=snapshotChild.val();
     				 		 })

     				 		 total=total>parseInt(userBestScore)?total:userBestScore;
     				 		 playerScoreSet.push([userNickName,userBestScore]);
     				 		 console.log('I am the same child ' + child.key);
     				 	}
     				 	else{
     				 		var nickTmp,scoreTmp;
     				 		child.forEach(function(snapshotChild){
     				 			if(snapshotChild.key=="score") scoreTmp=snapshotChild.val();
     				 		 	else if(snapshotChild.key=="userName") nickTmp=snapshotChild.val();
     				 		})
     				 		total=total>parseInt(scoreTmp)?total:scoreTmp;
     				 		playerScoreSet.push([nickTmp,scoreTmp]);
     				 	}
       				 console.log('I am a child ' + child.key);
     		 })
      		
     		 resolve(myFunctToRunAfter())
    	}).then(function() {
      			
    			  console.log(snapshot.val())
      			console.info('RUN LAST')
    		})
  		})
 	}

 	function displayInform(mn,mx){
    	return new Promise(function(resolve, reject) {
    		var st=mn;
			var ed=playerScoreSet.length<mx?playerScoreSet.length:mx;
			var cnt=0;
			console.log("userList: "+userList.length);
    		for(var i=st;i<ed;i++){
    			RankingName[cnt].setText(String(userList[i]));
  				RankingScore[cnt].x=(startEdge.width*0.765-5)-(String(scoreList[i]).length-1)*15;
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
    		resolve(startState.prototype.setRankingTxt(st,ed));

    		}).then(function() {
      			console.info('RUN LAST')
    	})
    }

 	function setUserList(mn,mx){
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

  			resolve(displayInform(mn,mx));

			}).then(function() {
      			console.info('RUN LAST')
    	})

	}