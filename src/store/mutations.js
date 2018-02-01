/**
 * File: f:\vue\workonline.com\src\store\mutations.js
 * Created Date: '2018-01-25 4:24:18
 * Author: 魏巍
 * -----
 * Last Modified: '2018-02-01 2:46:54
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */

import {
	HIDE_LOADING,
	SHOW_LOADING,
	SET_LOGIN
} from './mutation-type'

const state={
	loading:false,
	logined:null
};

const mutations={
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	[SET_LOGIN](state,userInfo){
		state.logined = userInfo;
	}
};

const getters={
	loading(state){
		return state.loading;
	},
	logined(state){
		return state.logined;
	}
};

export default{
	state,
	mutations,
	getters
}