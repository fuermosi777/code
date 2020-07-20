/*
given makeRequest(url, callback); 
    
    write enqueue(url, callback)

    how to test?
    followup: heap
*/

// function makeRequest(url, callback) {
//     setTimeout(() => {
//         callback(url);
//     }, url * 100);
// }


function queue() {
    let tasks = [];
    let otherTaskRuning = false;

    function runTask(url, callback) {
        otherTaskRuning = true;
        makeRequest(url,  (data) => {
            callback(data);
            otherTaskRuning = false;
            if (tasks.length > 0) {
                let currentTask = tasks.shift();
                runTask(currentTask.url, currentTask.callback)
            }
        })
    }

    return function(url, callback) {
        if (otherTaskRuning) {
            tasks.push({ url, callback });
        } else {
            runTask(url, callback);
        }
    }
}


let makeRequestInQ = queue();

makeRequestInQ(30, data => console.log(data));
makeRequestInQ(5, data => console.log(data));

// Follow up:
// - 1. Add concurrency option; 
// - 2. Assign priority. 
// - 3. Error handling?