/**
 * File: f:\vue\workonline.com\src\store\mutations.js
 * Created Date: '2018-01-25 4:24:18
 * Author: 魏巍
 * -----
 * Last Modified: '2018-01-25 4:34:01
 * Modified By: 魏巍
 * -----
 * Copyright (c) 2018 魏巍
 * ------------------------------------
 * Javascript will save your soul!
 */

import {
	HIDE_LOADING,
	SHOW_LOADING
} from './mutation-type'

const state={
	loading:false
};

const mutations={
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	}
};

const getters={
	loading(state){
		return state.loading;
	}
};

export default{
	state,
	mutations,
	getters
}