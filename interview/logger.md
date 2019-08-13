You have a server that processes a lot of requests per second, and invokes a Logger every time request processing starts or finishes; the timestamp is guaranteed non-decreasing: 

interface Logger { 
  void started(long timestamp, String requestId); 
  void finished(long timestamp, String requestId); 
} 

To analyze the server's performance, you'd like to write a log file of the following form, ordered by tStarted: 

$request_id started at $tStarted, finished at $tFinished 

Implement the Logger class. The challenges are: 
* you learn of completed requests in order of their finished timestamp, but have to print them in order of started timestamp. 
* you of course cannot store all requests, then sort them by started, and print everything, because there are too many. 