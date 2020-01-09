function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTimestamp(){
	return new Date().getTime();
}
function getRandStr(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    return text;
  }
function getRandNum(length) {
	var text = "";
	var possible = "0123456789";
	for (var i = 0; i < length; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
//IP Header
var val_ip = require("ipaddr.js");
//
var list_ip = [
	'0.0.0.0-255.255.255.255',
	'66.231.64.0-66.231.79.255',
	'152.200.0.0-152.203.255.255',
	'152.204.0.0-152.205.255.255',
	'157.253.0.0-157.253.255.255',
	'161.10.0.0-161.10.255.255',
	'161.18.0.0-161.18.255.255',
	'167.0.0.0-167.0.255.255',
	'168.176.0.0-168.176.255.255',
	'177.252.0.0-177.255.255.255',
	'179.1.0.0-179.1.255.255',
	'179.12.0.0-179.15.255.255',
	'179.18.0.0-179.19.255.255',
	'179.32.0.0-179.33.255.255',
	'179.49.128.0-179.49.255.255',
	'179.50.0.0-179.50.127.255',
	'179.51.96.0-179.51.127.255',
	'179.60.32.0-179.60.47.255',
	'179.61.112.0-179.61.127.255',
	'181.32.0.0-181.33.255.255',
	'181.48.0.0-181.55.255.255',
	'181.56.0.0-181.63.255.255',
	'181.68.0.0-181.69.255.255',
	'181.70.0.0-181.71.255.255',
	'181.118.144.0-181.118.159.255',
	'181.128.0.0-181.135.255.255',
	'181.136.0.0-181.143.255.255',
	'181.144.0.0-181.151.255.255',
	'181.152.0.0-181.159.255.255',
	'181.174.0.0-181.174.63.255',
	'181.192.128.0-181.192.255.255',
	'181.199.192.0-181.199.207.255',
	'181.204.0.0-181.207.255.255',
	'181.225.64.0-181.225.79.255',
	'181.225.80.0-181.225.95.255',
	'181.225.96.0-181.225.111.255',
	'181.232.0.0-181.232.127.255',
	'181.234.0.0-181.235.255.255',
	'181.236.0.0-181.237.255.255',
	'181.240.0.0-181.255.255.255',
	'186.0.0.0-186.0.63.255',
	'186.0.64.0-186.0.127.255',
	'186.1.128.0-186.1.159.255',
	'186.1.160.0-186.1.191.255',
	'186.27.128.0-186.27.255.255',
	'186.28.0.0-186.28.255.255',
	'186.29.0.0-186.29.255.255',
	'186.30.0.0-186.30.255.255',
	'186.31.0.0-186.31.255.255',
	'186.43.0.0-186.43.127.255',
	'186.80.0.0-186.83.255.255',
	'186.84.0.0-186.87.255.255',
	'186.96.96.0-186.96.127.255',
	'186.97.0.0-186.97.63.255',
	'186.97.64.0-186.97.127.255',
	'186.97.128.0-186.97.255.255',
	'186.98.0.0-186.98.255.255',
	'186.99.0.0-186.99.255.255',
	'186.102.0.0-186.102.255.255',
	'186.103.0.0-186.103.127.255',
	'186.112.0.0-186.115.255.255',
	'186.116.0.0-186.119.255.255',
	'186.121.0.0-186.121.127.255',
	'186.144.0.0-186.147.255.255',
	'186.148.160.0-186.148.191.255',
	'186.154.0.0-186.154.255.255',
	'186.155.0.0-186.155.255.255',
	'186.159.0.0-186.159.63.255',
	'186.159.64.0-186.159.95.255',
	'186.168.0.0-186.169.255.255',
	'186.170.0.0-186.171.255.255',
	'186.179.96.0-186.179.111.255',
	'186.180.0.0-186.180.255.255',
	'186.181.0.0-186.181.255.255',
	'186.183.128.0-186.183.255.255',
	'190.0.0.0-190.0.31.255',
	'190.0.32.0-190.0.63.255',
	'190.1.64.0-190.1.95.255',
	'190.1.128.0-190.1.159.255',
	'190.1.160.0-190.1.191.255',
	'190.1.192.0-190.1.223.255',
	'190.1.224.0-190.1.255.255',
	'190.3.192.0-190.3.223.255',
	'190.3.224.0-190.3.255.255',
	'190.5.192.0-190.5.207.255',
	'190.6.160.0-190.6.175.255',
	'190.6.176.0-190.6.191.255',
	'190.7.64.0-190.7.79.255',
	'190.7.80.0-190.7.95.255',
	'190.7.96.0-190.7.111.255',
	'190.7.112.0-190.7.127.255',
	'190.7.128.0-190.7.143.255',
	'190.7.144.0-190.7.159.255',
	'190.8.192.0-190.8.223.255',
	'190.8.224.0-190.8.255.255',
	'190.9.64.0-190.9.95.255',
	'190.9.96.0-190.9.127.255',
	'190.9.192.0-190.9.223.255',
	'190.9.224.0-190.9.255.255',
	'190.12.128.0-190.12.159.255',
	'190.13.0.0-190.13.31.255',
	'190.13.32.0-190.13.63.255',
	'190.13.96.0-190.13.111.255',
	'190.13.192.0-190.13.207.255',
	'190.14.224.0-190.14.239.255',
	'190.14.240.0-190.14.255.255',
	'190.15.0.0-190.15.31.255',
	'190.24.0.0-190.24.255.255',
	'190.25.0.0-190.25.255.255',
	'190.26.0.0-190.26.255.255',
	'190.27.0.0-190.27.255.255',
	'190.28.0.0-190.28.255.255',
	'190.29.0.0-190.29.255.255',
	'190.52.0.0-190.52.31.255',
	'190.60.0.0-190.60.255.255',
	'190.61.0.0-190.61.31.255',
	'190.61.32.0-190.61.63.255',
	'190.61.64.0-190.61.127.255',
	'190.61.128.0-190.61.255.255',
	'190.65.0.0-190.65.255.255',
	'190.66.0.0-190.67.255.255',
	'190.68.0.0-190.69.255.255',
	'190.70.0.0-190.70.127.255',
	'190.70.128.0-190.70.255.255',
	'190.71.0.0-190.71.255.255',
	'190.84.0.0-190.84.255.255',
	'190.85.0.0-190.85.255.255',
	'190.90.0.0-190.90.255.255',
	'190.93.128.0-190.93.159.255',
	'190.96.128.0-190.96.159.255',
	'190.96.160.0-190.96.191.255',
	'190.96.192.0-190.96.207.255',
	'190.96.208.0-190.96.223.255',
	'190.96.224.0-190.96.255.255',
	'190.97.64.0-190.97.79.255',
	'190.97.80.0-190.97.95.255',
	'190.97.128.0-190.97.159.255',
	'190.97.192.0-190.97.223.255',
	'190.99.128.0-190.99.255.255',
	'190.102.160.0-190.102.191.255',
	'190.102.192.0-190.102.207.255',
	'190.102.208.0-190.102.223.255',
	'190.103.96.0-190.103.111.255',
	'190.103.112.0-190.103.127.255',
	'190.107.16.0-190.107.31.255',
	'190.109.96.0-190.109.127.255',
	'190.109.128.0-190.109.159.255',
	'190.109.160.0-190.109.191.255',
	'190.110.64.0-190.110.95.255',
	'190.115.224.0-190.115.255.255',
	'190.120.128.0-190.120.143.255',
	'190.121.128.0-190.121.143.255',
	'190.121.144.0-190.121.159.255',
	'190.124.96.0-190.124.127.255',
	'190.125.0.0-190.125.255.255',
	'190.126.0.0-190.127.255.255',
	'190.128.0.0-190.128.31.255',
	'190.128.32.0-190.128.63.255',
	'190.128.64.0-190.128.127.255',
	'190.130.64.0-190.130.127.255',
	'190.131.192.0-190.131.255.255',
	'190.143.0.0-190.143.63.255',
	'190.143.64.0-190.143.127.255',
	'190.144.0.0-190.147.255.255',
	'190.151.192.0-190.151.255.255',
	'190.156.0.0-190.157.255.255',
	'190.158.0.0-190.159.255.255',
	'190.165.0.0-190.165.63.255',
	'190.165.64.0-190.165.127.255',
	'190.165.128.0-190.165.255.255',
	'190.171.64.0-190.171.95.255',
	'190.182.0.0-190.182.63.255',
	'190.182.64.0-190.182.127.255',
	'190.184.128.0-190.184.191.255',
	'190.240.0.0-190.240.63.255',
	'190.240.64.0-190.240.127.255',
	'190.240.128.0-190.240.255.255',
	'190.242.0.0-190.242.255.255',
	'190.243.0.0-190.243.255.255',
	'190.248.0.0-190.249.255.255',
	'190.250.0.0-190.251.255.255',
	'190.252.0.0-190.255.255.255',
	'191.64.0.0-191.79.255.255',
	'191.88.0.0-191.95.255.255',
	'191.97.0.0-191.97.15.255',
	'191.98.0.0-191.98.127.255',
	'191.102.0.0-191.102.15.255',
	'191.102.64.0-191.102.127.255',
	'191.102.192.0-191.102.223.255',
	'191.102.224.0-191.102.239.255',
	'191.103.128.0-191.103.255.255',
	'191.104.0.0-191.111.255.255',
	'191.144.0.0-191.159.255.255',
	'200.1.64.0-200.1.95.255',
	'200.3.128.0-200.3.143.255',
	'200.4.16.0-200.4.31.255',
	'200.6.160.0-200.6.175.255',
	'200.6.176.0-200.6.191.255',
	'200.12.176.0-200.12.191.255',
	'200.13.192.0-200.13.223.255',
	'200.13.224.0-200.13.255.255',
	'200.21.0.0-200.21.255.255',
	'200.24.16.0-200.24.31.255',
	'200.24.32.0-200.24.47.255',
	'200.24.48.0-200.24.63.255',
	'200.24.96.0-200.24.111.255',
	'200.24.112.0-200.24.127.255',
	'200.25.0.0-200.25.127.255',
	'200.25.224.0-200.25.239.255',
	'200.25.240.0-200.25.255.255',
	'200.26.128.0-200.26.159.255',
	'200.29.96.0-200.29.111.255',
	'200.29.112.0-200.29.127.255',
	'200.30.64.0-200.30.79.255',
	'200.30.80.0-200.30.95.255',
	'200.30.96.0-200.30.127.255',
	'200.31.64.0-200.31.95.255',
	'200.31.192.0-200.31.207.255',
	'200.31.208.0-200.31.223.255',
	'200.35.32.0-200.35.47.255',
	'200.35.48.0-200.35.63.255',
	'200.58.192.0-200.58.207.255',
	'200.58.208.0-200.58.223.255',
	'200.58.224.0-200.58.239.255',
	'200.61.128.0-200.61.159.255',
	'200.69.64.0-200.69.95.255',
	'200.69.96.0-200.69.111.255',
	'200.69.112.0-200.69.127.255',
	'200.71.32.0-200.71.47.255',
	'200.71.48.0-200.71.63.255',
	'200.73.0.0-200.73.63.255',
	'200.73.64.0-200.73.95.255',
	'200.74.128.0-200.74.159.255',
	'200.75.32.0-200.75.63.255',
	'200.75.64.0-200.75.95.255',
	'200.80.0.0-200.80.63.255',
	'200.85.224.0-200.85.239.255',
	'200.85.240.0-200.85.255.255',
	'200.89.96.0-200.89.111.255',
	'200.89.112.0-200.89.127.255',
	'200.89.192.0-200.89.207.255',
	'200.89.208.0-200.89.223.255',
	'200.89.224.0-200.89.239.255',
	'200.89.240.0-200.89.255.255',
	'200.91.192.0-200.91.223.255',
	'200.91.224.0-200.91.255.255',
	'200.93.128.0-200.93.159.255',
	'200.93.160.0-200.93.191.255',
	'200.106.160.0-200.106.191.255',
	'200.106.192.0-200.106.223.255',
	'200.110.128.0-200.110.159.255',
	'200.112.192.0-200.112.207.255',
	'200.114.0.0-200.114.15.255',
	'200.114.16.0-200.114.31.255',
	'200.114.32.0-200.114.63.255',
	'200.116.0.0-200.116.127.255',
	'200.116.128.0-200.116.255.255',
	'200.118.0.0-200.118.127.255',
	'200.118.128.0-200.118.255.255',
	'200.119.0.0-200.119.31.255',
	'200.119.32.0-200.119.63.255',
	'200.119.64.0-200.119.127.255',
	'200.122.192.0-200.122.223.255',
	'200.122.224.0-200.122.239.255',
	'200.122.240.0-200.122.255.255',
	'201.184.0.0-201.185.255.255',
	'201.190.64.0-201.190.127.255',
	'201.216.0.0-201.216.31.255',
	'201.216.32.0-201.216.63.255',
	'201.217.192.0-201.217.223.255',
	'201.219.112.0-201.219.127.255',
	'201.219.192.0-201.219.223.255',
	'201.220.32.0-201.220.47.255',
	'201.220.48.0-201.220.63.255',
	'201.220.64.0-201.220.79.255',
	'201.220.80.0-201.220.95.255',
	'201.221.128.0-201.221.143.255',
	'201.221.144.0-201.221.159.255',
	'201.221.160.0-201.221.175.255',
	'201.221.176.0-201.221.191.255',
	'201.228.0.0-201.228.127.255',
	'201.228.128.0-201.228.255.255',
	'201.232.0.0-201.232.127.255',
	'201.232.128.0-201.232.255.255',
	'201.233.0.0-201.233.127.255',
	'201.233.128.0-201.233.255.255',
	'201.236.192.0-201.236.223.255',
	'201.236.224.0-201.236.255.255',
	'201.244.0.0-201.244.255.255',
	'201.245.0.0-201.245.255.255',
	'216.241.0.0-216.241.31.255',
	'14.192.128.0-14.192.159.255',
	'27.255.0.0-27.255.63.255',
	'37.111.128.0-37.111.191.255',
	'39.32.0.0-39.63.255.255',
	'42.201.128.0-42.201.255.255',
	'58.27.128.0-58.27.255.255',
	'58.65.128.0-58.65.159.255',
	'58.65.160.0-58.65.191.255',
	'58.65.192.0-58.65.223.255',
	'58.181.96.0-58.181.111.255',
	'58.181.112.0-58.181.127.255',
	'59.103.0.0-59.103.255.255',
	'61.5.128.0-61.5.159.255',
	'72.255.0.0-72.255.63.255',
	'101.50.64.0-101.50.127.255',
	'101.53.224.0-101.53.255.255',
	'110.36.0.0-110.39.255.255',
	'110.93.192.0-110.93.255.255',
	'111.68.96.0-111.68.111.255',
	'111.88.0.0-111.88.255.255',
	'111.92.128.0-111.92.159.255',
	'111.119.176.0-111.119.191.255',
	'113.203.192.0-113.203.207.255',
	'113.203.208.0-113.203.223.255',
	'113.203.224.0-113.203.255.255',
	'115.167.0.0-115.167.127.255',
	'115.186.0.0-115.186.127.255',
	'115.186.128.0-115.186.191.255',
	'116.0.32.0-116.0.63.255',
	'116.58.0.0-116.58.127.255',
	'116.71.0.0-116.71.255.255',
	'116.90.96.0-116.90.127.255',
	'117.18.240.0-117.18.255.255',
	'117.20.16.0-117.20.31.255',
	'117.102.0.0-117.102.63.255',
	'118.103.224.0-118.103.239.255',
	'118.107.128.0-118.107.143.255',
	'119.30.64.0-119.30.127.255',
	'119.63.128.0-119.63.143.255',
	'119.73.0.0-119.73.127.255',
	'119.152.0.0-119.159.255.255',
	'119.160.0.0-119.160.127.255',
	'121.52.144.0-121.52.159.255',
	'122.129.64.0-122.129.95.255',
	'124.29.192.0-124.29.255.255',
	'124.109.32.0-124.109.63.255',
	'125.209.64.0-125.209.127.255',
	'139.190.0.0-139.190.255.255',
	'175.107.0.0-175.107.63.255',
	'175.107.192.0-175.107.255.255',
	'175.110.0.0-175.110.127.255',
	'175.111.0.0-175.111.15.255',
	'180.92.128.0-180.92.159.255',
	'180.149.208.0-180.149.223.255',
	'180.178.128.0-180.178.191.255',
	'182.176.0.0-182.191.255.255',
	'202.5.128.0-202.5.159.255',
	'202.44.80.0-202.44.95.255',
	'202.47.32.0-202.47.63.255',
	'202.59.64.0-202.59.95.255',
	'202.61.32.0-202.61.63.255',
	'202.63.192.0-202.63.223.255',
	'202.69.32.0-202.69.47.255',
	'202.69.48.0-202.69.63.255',
	'202.70.144.0-202.70.159.255',
	'202.83.160.0-202.83.175.255',
	'202.92.16.0-202.92.31.255',
	'202.123.240.0-202.123.255.255',
	'202.125.128.0-202.125.159.255',
	'202.141.224.0-202.141.255.255',
	'202.142.144.0-202.142.159.255',
	'202.142.160.0-202.142.191.255',
	'202.143.112.0-202.143.127.255',
	'202.147.160.0-202.147.175.255',
	'202.147.176.0-202.147.191.255',
	'202.154.224.0-202.154.239.255',
	'202.154.240.0-202.154.255.255',
	'202.163.64.0-202.163.95.255',
	'202.163.96.0-202.163.127.255',
	'202.166.160.0-202.166.175.255',
	'203.81.192.0-203.81.207.255',
	'203.81.208.0-203.81.223.255',
	'203.81.224.0-203.81.239.255',
	'203.82.48.0-203.82.63.255',
	'203.99.48.0-203.99.63.255',
	'203.99.160.0-203.99.191.255',
	'203.101.160.0-203.101.191.255',
	'203.124.32.0-203.124.63.255',
	'203.128.16.0-203.128.31.255',
	'203.130.16.0-203.130.31.255',
	'203.135.0.0-203.135.31.255',
	'203.135.32.0-203.135.63.255',
	'203.170.64.0-203.170.79.255',
	'203.175.64.0-203.175.79.255',
	'203.215.160.0-203.215.191.255',
	'203.223.160.0-203.223.175.255',
	'209.150.144.0-209.150.159.255',
	'210.2.128.0-210.2.191.255',
	'210.56.0.0-210.56.31.255',
	'221.120.192.0-221.120.255.255',
	'223.29.224.0-223.29.239.255',
	'132.157.0.0-132.157.255.255',
	'132.184.0.0-132.184.255.255',
	'132.191.0.0-132.191.255.255',
	'132.251.0.0-132.251.127.255',
	'132.251.128.0-132.251.191.255',
	'132.251.192.0-132.251.223.255',
	'148.102.0.0-148.102.127.255',
	'161.132.0.0-161.132.255.255',
	'179.6.0.0-179.6.255.255',
	'179.7.0.0-179.7.255.255',
	'179.43.80.0-179.43.95.255',
	'181.64.0.0-181.65.255.255',
	'181.66.0.0-181.67.255.255',
	'181.176.0.0-181.176.255.255',
	'181.177.224.0-181.177.255.255',
	'181.199.128.0-181.199.143.255',
	'181.224.224.0-181.224.255.255',
	'181.233.192.0-181.233.255.255',
	'186.160.0.0-186.163.255.255',
	'190.8.128.0-190.8.159.255',
	'190.12.64.0-190.12.79.255',
	'190.12.80.0-190.12.95.255',
	'190.40.0.0-190.40.127.255',
	'190.40.128.0-190.40.255.255',
	'190.41.0.0-190.41.127.255',
	'190.41.128.0-190.41.255.255',
	'190.42.0.0-190.43.255.255',
	'190.52.112.0-190.52.127.255',
	'190.81.0.0-190.81.63.255',
	'190.81.64.0-190.81.127.255',
	'190.81.128.0-190.81.255.255',
	'190.102.128.0-190.102.159.255',
	'190.105.240.0-190.105.255.255',
	'190.113.192.0-190.113.223.255',
	'190.116.0.0-190.117.255.255',
	'190.118.0.0-190.118.255.255',
	'190.119.0.0-190.119.255.255',
	'190.187.0.0-190.187.127.255',
	'190.187.128.0-190.187.255.255',
	'190.222.0.0-190.222.255.255',
	'190.223.0.0-190.223.255.255',
	'190.232.0.0-190.233.255.255',
	'190.234.0.0-190.235.255.255',
	'190.236.0.0-190.237.255.255',
	'190.238.0.0-190.239.255.255',
	'191.97.48.0-191.97.63.255',
	'191.98.128.0-191.98.191.255',
	'200.4.192.0-200.4.255.255',
	'200.10.64.0-200.10.95.255',
	'200.11.48.0-200.11.63.255',
	'200.24.160.0-200.24.191.255',
	'200.31.96.0-200.31.111.255',
	'200.31.112.0-200.31.127.255',
	'200.37.0.0-200.37.255.255',
	'200.48.0.0-200.48.255.255',
	'200.60.0.0-200.60.127.255',
	'200.60.128.0-200.60.191.255',
	'200.60.192.0-200.60.223.255',
	'200.60.224.0-200.60.255.255',
	'200.62.128.0-200.62.191.255',
	'200.62.192.0-200.62.207.255',
	'200.62.208.0-200.62.223.255',
	'200.62.224.0-200.62.255.255',
	'200.89.0.0-200.89.15.255',
	'200.89.16.0-200.89.31.255',
	'200.106.0.0-200.106.63.255',
	'200.106.64.0-200.106.127.255',
	'200.107.128.0-200.107.191.255',
	'200.108.96.0-200.108.111.255',
	'200.110.0.0-200.110.31.255',
	'200.110.32.0-200.110.47.255',
	'200.121.0.0-200.121.127.255',
	'200.121.128.0-200.121.255.255',
	'200.123.0.0-200.123.31.255',
	'201.230.0.0-201.230.127.255',
	'201.230.128.0-201.230.255.255',
	'201.240.0.0-201.240.127.255',
	'201.240.128.0-201.240.255.255',
	'209.45.0.0-209.45.127.255',
	'216.244.128.0-216.244.191.255'
];
function random_ip(){	
	var get_ip = [0,0,0,0];
	var index = getRandInt(0,(list_ip.length-1));
	var my_ip = list_ip[index].split('-');
	var awal = my_ip[0].split('.');
	var akhir = my_ip[1].split('.');
	for(i=0;i<4;i++){
		if(awal[i] == akhir[i]){
			get_ip[i] = parseInt(awal[i]);
		}else{
			get_ip[i] = getRandInt(parseInt(awal[i]), parseInt(akhir[i]));
		}
	}
	return get_ip[0] +"."+ get_ip[1] +"."+ get_ip[2] +"."+ get_ip[3] ;
}
function goodip(){
	var ip = random_ip();
	var validation = val_ip.parse(ip).range();
	if(validation == "unicast"){
		return ip;
	}else{
		return goodip();
	}
}
//Package
var arrPackage = ['virus.cleaner.antivirus.phone.security.boost','phone.cleaner.antivirus.speed.booster','com.art.color.number.coloring.book','com.magic.puzzle.word.connect.travel','com.bongolight.pixelcoloring','com.pixel.art.coloring.color.by.number','com.fingerstudios.solitaire.classic','com.myapp.sweethouse','com.myapp.sugarStore','com.castle.play','real.robot.car.tranforming.battle.city.formula.dragon','car.stunt.racing.crazy.ramp.driving.impossiable.tracks','com.fsjj.cerescleaner','com.archery.go.bow.arrow.king.sports.game','bumperbattle.io.game','pool.master.billiards.ball.games','boat.rider.game.race.row.kayak.adventure','io.games.poolio.ballpool.game','com.buzzfeed.tasty','com.buzzfeed.android','faceart.photo.editor.pro.face.camera','com.locate.number.find.world','com.sail.advanced.booster','com.oppanagames.car.simulator','com.oppanagames.car.simulator.c63','com.OppanaGames.CarSim.m5.f90','com.OppanaGames.OffroadPatriot','com.OppanaGames.Lexus.Simulator','com.OppanaGames.Test.Drive.Vesta.Simulator','com.OG.Driver.Simulator.Life','com.OppanaGames.RussianCarsVesta','com.OppanaGames.Gelik2Sim','com.OppanaGames.CrimeSimulatorGameFree','com.OppanaGames.SafariHunting4x4','com.OppanaGames.Lamborghini','com.OppanaGames.OffroadCruiserSim2','com.OppanaGames.CarSim','com.OppanaGames.Real.Cars.VestaSW','com.OppanaGames.PickupTruckSim','com.OppanaGames.HuntingSimulator4x4','com.OppanaGames.Neighbor2','com.OppanaGames.EuropeanHunting4x4','com.OppanaGames.MuscleCarSimulator','com.OppanaGames.OffroadPickupTruckF150','com.OppanaGames.Lambo_Veneno','com.OppanaGames.MuscleCarZL','com.OppanaGames.OffroadPickupTruckSilverado','com.OppanaGames.GelikSim','com.OppanaGames.MuscleCarChallenger','com.OppanaGames.TahoeSim','com.OppanaGames.OffroadPickupTruckR','com.OppanaGames.MuscleCarMustang','com.OppanaGames.BmwSim','com.OppanaGames.Racing.Speed.Vesta','com.OppanaGames.MercedesSim','com.OppanaGames.LuxuryPoliceCar','com.OppanaGames.EscaladeSim','com.OppanaGames.RoverSim','com.OppanaGames.AudiSim','com.OppanaGames.infinitysim','com.OppanaGames.PorscheSim','com.OppanaGames.CruiserSim','com.OppanaGames.Neighbor','com.OppanaGames.UrbanCarSim','com.OppanaGames.LexusSim','com.OppanaGames.VeyronChironSim','com.OppanaGames.SimPriorik','com.OppanaGames.Russian.Crime.Simulator','com.OppanaGames.real.gangster.crime.simulator.free','com.OppanaGames.AmericanHunting4x4Deer','com.OppanaGames.Russian_Hunting_4x4','com.OppanaGames.Luxury.Safari.Hunting','com.OppanaGames.AutoPolizei','com.OppanaGames.Taxi','com.OppanaGames.RussianCarsPriora','com.OppanaGames.VolvoSim','com.OppanaGames.i8','com.OppanaGames.RussianCars8','com.OppanaGames.Corvette','com.OppanaGames.CarSimCorolla','com.OppanaGames.Solaris','com.OppanaGames.real.gangster.crime.simulator','com.OppanaGames.PoliceCarChase','com.OppanaGames.RealCrimeRussianCity','com.oppanagames.luxuryparking','com.OppanaGames.RealCrimeSimulator','com.OppanaGames.HammerSim','com.OppanaGames.AutoTheftCrimeSimulator','com.OppanaGames.RussianCrime','com.OppanaGames.Car.Simulator.M3','com.OppanaGames.CrownVictoria','com.OppanaGames.Supercar_SLS','com.OppanaGames.Racing.Speed.Muscle','com.OppanaGames.RussianCarsOffroad','com.OppanaGames.CrimeTransporter','com.OppanaGames.TrafficTank2','com.OppanaGames.TrafficTank','com.OppanaGames.OffroadDrift','com.OppanaGames.WV.Golf','com.OppanaGames.MotoExtreme3D','com.og.fastfuriousdrag','com.OppanaGames.SUVTrafficRacer'];
function random_package(){
	return arrPackage[getRandInt(0,(arrPackage.length-1))];
}
//URL
function random_url() {
	return "http://monespace.me/index.php?type=interstitial";
}
//UserAgent
var model = ['SAMSUNG SM-N960x','SAMSUNG SM-T590','SAMSUNG SM-T595','SAMSUNG SM-T830','SAMSUNG SM-T835','SAMSUNG SM-J800x','SAMSUNG SM-J600G','SAMSUNG SM-G8850','SAMSUNG SM-A600x','SAMSUNG SM-A605x','SAMSUNG SM-J400x','SAMSUNG SM-J600x','SAMSUNG SM-J720x','SAMSUNG SM-G611x','SAMSUNG SM-G960x','SAMSUNG SM-G965x','SAMSUNG SM-J250x','SAMSUNG SM-A530x','SAMSUNG SM-A730x','SAMSUNG SM-J200G','SAMSUNG SM-T380','SAMSUNG SM-T385','SAMSUNG SM-C710x','SAMSUNG SM-C8000','SAMSUNG SM-N950x','SAMSUNG SM-N935x','SAMSUNG SM-J727x','SAMSUNG SM-J730x','SAMSUNG SM-J530x','SAMSUNG SM-J530Y','SAMSUNG SM-J327x','SAMSUNG SM-J330x','SAMSUNG SM-J730x','SAMSUNG SM-G615x','SAMSUNG SM-G950x','SAMSUNG SM-G955x','SAMSUNG SM-C5010','SAMSUNG SM-T820','SAMSUNG SM-T825','SAMSUNG SM-A720x','SAMSUNG SM-A520x','SAMSUNG SM-A320x','SAMSUNG SM-C7010','SAMSUNG SM-J106F','SAMSUNG SM-G532F','SAMSUNG SM-G532M','SAMSUNG SM-G532G','SAMSUNG SM-C900F','SAMSUNG SM-A810x','SAMSUNG SM-G570x','SAMSUNG SM-G610x','SAMSUNG SM-J710','SAMSUNG SM-G610F','SAMSUNG SM-G610M','SAMSUNG SM-G570F','SAMSUNG SM-G570M','SAMSUNG SM-N930x','SAMSUNG SM-J310F','SAMSUNG SM-T585','SAMSUNG SM-C5000','SAMSUNG SM-C7000','SAMSUNG SM-J5109','SAMSUNG SM-J510F','SAMSUNG SM-J510FN','SAMSUNG SM-J510H','SAMSUNG SM-J510G','SAMSUNG SM-J510MN','SAMSUNG SM-J510Y','SAMSUNG SM-J5108','SAMSUNG SM-J510K','SAMSUNG SM-J510L','SAMSUNG SM-J510S','SAMSUNG SM-J510UN','SAMSUNG SM-J7109','SAMSUNG SM-J710F','SAMSUNG SM-J710FN','SAMSUNG SM-J710H','SAMSUNG SM-J710MN','SAMSUNG SM-J710FQ','SAMSUNG SM-J710K','SAMSUNG SM-J710K','SAMSUNG SM-J710GN','SAMSUNG SM-J3109x','SAMSUNG SM-J320F','SAMSUNG SM-J320G','SAMSUNG SM-J320P','SAMSUNG SM-J320M','SAMSUNG SM-T280','SAMSUNG SM-T285','SAMSUNG SM-A9100','SAMSUNG SM-A910F','SAMSUNG SM-J105B','SAMSUNG SM-J105DS','SAMSUNG SM-J105F','SAMSUNG SM-G935F','SAMSUNG SM-G935FD','SAMSUNG SM-G9350','SAMSUNG SM-G935A','SAMSUNG SM-G935V','SAMSUNG SM-G935U','SAMSUNG SM-G935S','SAMSUNG SM-G935K','SAMSUNG SM-G935W8','SAMSUNG SM-G930F','SAMSUNG SM-G930FD "Dual-SIM"','SAMSUNG SM-G9300','SAMSUNG SM-G930A','SAMSUNG SM-G930V','SAMSUNG SM-G930AZ','SAMSUNG SM-G930S','SAMSUNG SM-G930K','SAMSUNG SM-G930W8','SAMSUNG SM-J120F','SAMSUNG SM-J120M','SAMSUNG SM-A9000','SAMSUNG SM-A7100','SAMSUNG SM-A710F','SAMSUNG SM-A710FD','SAMSUNG SM-A710M','SAMSUNG SM-A710Y','SAMSUNG SM-A5100','SAMSUNG SM-A510F','SAMSUNG SM-A510FD','SAMSUNG SM-A510M','SAMSUNG SM-A510Y','SAMSUNG SM-A310F','SAMSUNG SM-A310M','SAMSUNG SM-J200F','SAMSUNG SM-J200Y','SAMSUNG SM-J200G','SAMSUNG SM-J200H','SAMSUNG SM-J200M','SAMSUNG SM-G928A','SAMSUNG SM-G928AZ','SAMSUNG SM-G928D','SAMSUNG SM-G928F','SAMSUNG SM-G928FD','SAMSUNG SM-G928I','SAMSUNG SM-G928K','SAMSUNG SM-G928L','SAMSUNG SM-G928P','SAMSUNG SM-G928PZ','SAMSUNG SM-G928R4','SAMSUNG SM-G928R7','SAMSUNG SM-G928S','SAMSUNG SM-G928T','SAMSUNG SM-G928T1','SAMSUNG SM-G928TR','SAMSUNG SM-G928V','SAMSUNG SM-G9280','SAMSUNG SM-G9288','SAMSUNG SM-G9289','SAMSUNG SM-A8000','SAMSUNG SM-A800F','SAMSUNG SM-A800I','SAMSUNG SM-A800S','SAMSUNG SM-A800Y','SAMSUNG SM-N9200','SAMSUNG SM-N920C','SAMSUNG SM-N920T','SAMSUNG SM-N920A','SAMSUNG SM-N920I','SAMSUNG SM-N9208','SAMSUNG SM-G903F','SAMSUNG SM-G903W','SAMSUNG SM-G318H','SAMSUNG SM-J500F','SAMSUNG SM-J500H','SAMSUNG SM-J500M','SAMSUNG SM-J500G','SAMSUNG SM-J700F','SAMSUNG SM-J700H','SAMSUNG SM-J700M','SAMSUNG SM-J700T','SAMSUNG SM-J700P','SAMSUNG SM-G925A','SAMSUNG SM-G925AZ','SAMSUNG SM-G925F','SAMSUNG SM-G925I','SAMSUNG SM-G925K','SAMSUNG SM-G925L','SAMSUNG SM-G925P','SAMSUNG SM-G925PZ','SAMSUNG SM-G925R4','SAMSUNG SM-G925R7','SAMSUNG SM-G925S','SAMSUNG SM-G925T','SAMSUNG SM-G925T1','SAMSUNG SM-G925TR','SAMSUNG SM-G925V','SAMSUNG SM-G9250','SAMSUNG SM-G9258','SAMSUNG SM-G9259','SAMSUNG SM-G920A','SAMSUNG SM-G920AZ','SAMSUNG SM-G920D','SAMSUNG SM-G920F','SAMSUNG SM-G920FD','SAMSUNG SM-G920I','SAMSUNG SM-G920K','SAMSUNG SM-G920L','SAMSUNG SM-G920P','SAMSUNG SM-G920PZ','SAMSUNG SM-G920R4','SAMSUNG SM-G920R7','SAMSUNG SM-G920S','SAMSUNG SM-G920T','SAMSUNG SM-G920T1','SAMSUNG SM-G920TR','SAMSUNG SM-G920V','SAMSUNG SM-G9200','SAMSUNG SM-G9208','SAMSUNG SM-G9209','SAMSUNG SM-J100H','SAMSUNG SM-J100F','SAMSUNG SM-A700F','SAMSUNG SM-A700FD','SAMSUNG SM-A700FQ','SAMSUNG SM-A700H','SAMSUNG SM-A700K','SAMSUNG SM-A700L','SAMSUNG SM-A700M','SAMSUNG SM-A700S','SAMSUNG SM-A700X','SAMSUNG SM-A700YD','SAMSUNG SM-A700YZ','SAMSUNG SM-A7000','SAMSUNG SM-A7009','SAMSUNG SM-A7009W','SAMSUNG SM-E700H','SAMSUNG SM-A500F','SAMSUNG SM-A500F1','SAMSUNG SM-A500FQ','SAMSUNG SM-A500FU','SAMSUNG SM-A500G','SAMSUNG SM-A500H','SAMSUNG SM-A500HQ','SAMSUNG SM-A500K','SAMSUNG SM-A500L','SAMSUNG SM-A500M','SAMSUNG SM-A500S','SAMSUNG SM-A500X','SAMSUNG SM-A500XZ','SAMSUNG SM-A500Y','SAMSUNG SM-A500YZ','SAMSUNG SM-A5000','SAMSUNG SM-A5009','SAMSUNG SM-A300F','SAMSUNG SM-A300FU','SAMSUNG SM-A300G','SAMSUNG SM-A300H','SAMSUNG SM-A300HQ','SAMSUNG SM-A300M','SAMSUNG SM-A300X','SAMSUNG SM-A300XU','SAMSUNG SM-A300XZ','SAMSUNG SM-A300Y','SAMSUNG SM-A300YZ','SAMSUNG SM-A3000','SAMSUNG SM-A3009','SAMSUNG SM-G360BT','SAMSUNG SM-G360H','SAMSUNG SM-N915G','SAMSUNG SM-N9150','SAMSUNG SM-N910G','SAMSUNG SM-G130H','SAMSUNG SM-G850F','SAMSUNG SM-G850FQ','SAMSUNG SM-G850K','SAMSUNG SM-G850L','SAMSUNG SM-G850M','SAMSUNG SM-G850S','SAMSUNG SM-G850W','SAMSUNG SM-G850Y','SAMSUNG SM-G530BT','SAMSUNG SM-G530F','SAMSUNG SM-G530FQ','SAMSUNG SM-G530FZ','SAMSUNG SM-G530H','SAMSUNG SM-G530M','SAMSUNG SM-G530MU','SAMSUNG SM-G530P','SAMSUNG SM-G530R4','SAMSUNG SM-G530R7','SAMSUNG SM-G530T','SAMSUNG SM-G530W','SAMSUNG SM-G530Y','SAMSUNG SM-G5306W','SAMSUNG SM-G5308W','SAMSUNG SM-G5309W','SAMSUNG SM-G360BT','SAMSUNG SM-G110B','SAMSUNG SM-G750F','SAMSUNG SM-G350E','SAMSUNG SM-G313F','SAMSUNG SM-G355H','SAMSUNG SM-G386F','SAMSUNG SM-C115','SAMSUNG SM-G310','SAMSUNG SM-G900','SAMSUNG SM-G900FD','SAMSUNG SM-N7500','SAMSUNG SM-N7502','SAMSUNG SM-N7505'];
var version = ['5.0','5.0.1','5.0.2','5.1','5.1.1','6.0','6.0.1','7.0','7.1','7.1.1','7.1.2'];
var chr_ver = ['40.0.2214','41.0.2272','42.0.2311','43.0.2357','44.0.2403','45.0.2454','46.0.2490','47.0.2526','48.0.2564','49.0.2623','50.0.2661','51.0.2704','52.0.2743','53.0.2785','54.0.2840','55.0.2883','56.0.2924','57.0.2987','58.0.3029','59.0.3071','60.0.3112','61.0.3163','62.0.3202','63.0.3239','64.0.3282','65.0.3325','66.0.3359','67.0.3396','68.0.3440','69.0.3497','70.0.3538'];
function random_ver(){
	return version[getRandInt(0,(version.length-1))];
}
function random_build(version){
	ver = version.substr(0,1);
	if(ver == 5){
		build = "L"+getRandStr(2)+getRandNum(2)+getRandStr(1);
	}
	if(ver == 6){
		build = "M"+getRandStr(2)+getRandNum(2)+getRandStr(1);
	}
	if(ver == 7){
		build = "N"+getRandStr(2)+getRandNum(2)+getRandStr(1);
	}
	return build;
}
function random_chrome(){
	return chr_ver[getRandInt(0,(chr_ver.length-1))];
}
function random_model(){
	return model[getRandInt(0,(model.length-1))];
}
function random_ua(){
	var rand_ver = random_ver();
	return "Mozilla/5.0 (Linux; Android "+rand_ver+"; "+random_model()+" Build/"+random_build(rand_ver)+"; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/"+random_chrome()+" Mobile Safari/537.36";
}
//Required Setting
var wp = require("webpage").create();
var head, lastTime, startTime;
//onLoad Setting
wp.onLoadStarted = function(url, isFrame) {
	lastTime = getTimestamp();
	wp.viewportSize = { width:480, height:640 };
	wp.zoomFactor = 1;
	wp.settings.allowMedia = true;
	wp.settings.loadImages = true;
	wp.settings.diskCache = true;
	wp.settings.resourceTimeout = 30000;	
	phantom.cookiesEnabled = true;
	wp.settings.userAgent = head["User-Agent"];
	wp.customHeaders = head;
	if(!isFrame){
		startTime = getTimestamp();
		checkFinished();
	}
};
//onInitialized
wp.onInitialized = function(){
	lastTime = getTimestamp();
};
//onConsole
wp.onConsoleMessage = function(msg) {
	console.log(msg);
};
//onErrorJS
wp.onError = function() {
	//console.log(message);
};
//onFinished Setting
wp.onLoadFinished = function(isFrame){
	lastTime = getTimestamp();
	if(!isFrame){
		startTime = getTimestamp();
	}
	//console.log("Loading of "+url+" is a "+ status);
};
//onResourceRequested
wp.onResourceRequested = function(requestData, networkRequest) {
	lastTime = getTimestamp();
	if(requestData.url == "http://bidder.decenterads.com/?token=9Xaw4VsmC3GPPfiyowK6"){
		networkRequest.setHeader("Content-Type", "application/json", false);
		networkRequest.setHeader("x-openrtb-version", "2.3", false);
		networkRequest.setHeader("Accept-Language", "", false);
		networkRequest.setHeader("Accept-Encoding", "", false);
		networkRequest.setHeader("Origin", "", false);
		networkRequest.setHeader("Referer", "", false);
		networkRequest.setHeader("X-Requested-With", "", false);
		networkRequest.setHeader("X-Forwarded-For", "", false);
		networkRequest.setHeader("Cache-Control", "", false);
		networkRequest.setHeader("User-Agent", "Rootends Media RTB 1.0/20190901", false);
	}
	//console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};
//onResourceReceived
wp.onResourceReceived = function() {
	lastTime = getTimestamp();
	//console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));

};
//onPageCreated
wp.onPageCreated = function(childPage) {
		childPage.onLoadStarted = function() {
		childPage.viewportSize = { width:480, height:640 };
		childPage.zoomFactor = 1;
		childPage.settings.allowMedia = true;
		childPage.settings.loadImages = true;
		childPage.settings.diskCache = true;	
		childPage.settings.resourceTimeout = 30000;
		phantom.cookiesEnabled = true;
		childPage.settings.userAgent = head["User-Agent"];
		childPage.customHeaders = head;
	};
	childPage.onLoadFinished = function(status) {
		if(status == "success"){
				childPage.close();
		}else{
			childPage.close();
		}
	};
};
//Behaviour Setting
function click(){
	return wp.sendEvent('click', getRandInt(0,480), getRandInt(0,640), 'left', 0);
}
function nonclick(){
	return slimer.wait(100);
}
var arrClick = [click,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick];
function RandClick(){
	return arrClick[getRandInt(0, (arrClick.length-1))]();
}
function cursorMove(){
	wp.sendEvent('mousemove', getRandInt(0,480), getRandInt(0,640), null, null);
	checkClickReload();
}
function clickNreload(){
	console.log('Click and Reload START!');
	RandClick();
	slimer.wait(3000);
	wp.clearCookies();
	delete head["X-Forwarded-For"];
	delete head["X-Requested-With"];
	delete head["User-Agent"];
	console.log("RELOAD!!!");
	wp.open(random_url(),{headers:head = {"X-Forwarded-For": goodip(), "User-Agent": random_ua(), "X-Requested-With": random_package()}});
}
//checkFinished
function checkFinished() {
	setTimeout(function () {
	var currentTime = getTimestamp();
		if(currentTime-lastTime>1500){
			console.log('checkFinished START!');
			cursorMove();
		}else{
			checkFinished();
		}
	}, 100);
}
function checkClickReload() {
	    setTimeout(function () {
			var currentTime = getTimestamp();
		if((currentTime-lastTime>1500) || (currentTime-startTime>30000)){
			clickNreload();
		}else{
			console.log("NOT FINISH!");
			checkFinished();
        }
    }, 100);
}
wp.open(random_url(),{headers:head = {"X-Forwarded-For": goodip(), "User-Agent": random_ua(), "X-Requested-With": random_package()}});