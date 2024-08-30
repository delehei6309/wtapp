/**
 * @fileoverview Device tool.
 */

const ua = navigator.userAgent.toLowerCase();

export const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;

export const isIOS =  !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);

export const isWechat = ua.indexOf('micromessenger') > -1;
