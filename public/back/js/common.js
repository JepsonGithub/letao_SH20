/**
 * Created by Jepson on 2018/5/9.
 */

// 禁用进度条
NProgress.configure({ showSpinner: false });

// 希望效果是, 每次ajax提交, 产生进度条, ajax完成, 结束进度条
/*
* ajax 全局事件
*   ajaxComplete 只要请求完成就调用 (不管成功或者失败)
*   ajaxError 请求失败时调用
*   ajaxSuccess 请求成功时调用
*
*   ajaxSend  请求发送时调用
*
*   ajaxStart  第一个ajax开始发送的时候调用
*   ajaxStop   最后一个ajax结束时调用
* */

$(document).ajaxStart(function() {
  // 开启进度条
  NProgress.start();
});

$(document).ajaxStop(function() {
  // 模拟网络环境
  setTimeout(function() {
    // 结束进度条
    NProgress.done();
  }, 500);
});


$(function() {

  // 1. 公共的二级菜单切换功能
  $('.category').click(function() {
    $('.lt_aside .child').stop().slideToggle();
  });


  // 2. 点击菜单按钮, 进行切换菜单
  $('.icon_menu').click(function() {
    $('.lt_aside').toggleClass("hidemenu");
    // 当菜单隐藏时, lt_topbar, lt_main 都不需要 padding-left 了
    $('.lt_topbar').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
  })

})







