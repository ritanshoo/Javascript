// Promises Concept using callbacks
let doTask = function (success, failure) {
    // doing the task
    let isDone = true;
    if (isDone) {
        success('Task is Done');
    }
    else {
        failure('Task is NOT Done');
    }
};

const testFun = (fun1, fun2) => {
    let result = 0;
    /**
     * data processing 
     * result = calculation();
     */
    result = 10

    if (result > 9) {
        fun1("RItanshu")
    } else {
        fun2("namasker")
    }
}

const toMIT = (name) => {
    console.log("you are in mit ")
};
const toCU = (name) => {
    console.log("you are in CU ")
};

testFun(toMIT, toCU);

const fun1 = (message) => {
    console.log(message);
};

const fun2 = (message) => {
    console.log(message);
};


// doTask(,);

// Declare a Promise in JavaScript
let cleanLaptop = new Promise((resolve, reject) => {
    // cleaning laptop
    let isDone = true;
    if (isDone) {
        resolve('Cleaning is Done');
    }
    else {
        reject('Cleaning is NOT Done');
    }
});

// execute a promise
cleanLaptop.then((message) => {
    console.log(`from resolve : ${message}`);
}).catch((message) => {
    console.log(`from reject : ${message}`);
});

// Dependent Promise
let doCourse = new Promise((resolve, reject) => {
    // doing course
    let isDone = false;
    if (isDone) {
        resolve('Course is Completed');
    }
    else {
        reject('Course is NOT Completed');
    }
});

let doProject = new Promise((resolve, reject) => {
    // doing project
    let isDone = true;
    if (isDone) {
        resolve('Project is Completed');
    }
    else {
        reject('Project is NOT Completed');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing technical round
    let isDone = true;
    if (isDone) {
        resolve('Technical round is Finished');
    }
    else {
        reject('Technical round is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing Manager round
    let isDone = true;
    if (isDone) {
        resolve('Manager round is Finished');
    }
    else {
        reject('Manager round is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing HR round
    let isDone = true;
    if (isDone) {
        resolve('HR round is Finished , Got JOB');
    }
    else {
        reject('HR round is NOT Finished , Got Rejected');
    }
});

// execute the dependent promises
doCourse.then((message) => {
    let output = `${message} -> `;
    doProject.then((message) => {
        output += `${message} -> `;
        doTechnicalRound.then((message) => {
            output += `${message} -> `;
            doManagerRound.then((message) => {
                output += `${message} -> `;
                doHRRound.then((message) => {
                    output += `${message} `;
                    console.log(output);
                }).catch((message) => {
                    console.error(message);
                });
            }).catch((message) => {
                console.error(message);
            });
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error(message);
});


// 



// Function to simulate fetching data from a server
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data = { message: 'Data fetched successfully!' };
                resolve(data);
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 2000);
    });
}

fetchData()

fetchData()
    .then((result) => {
        console.log()
        console.log(result.message); 
    })
    .catch((error) => {
        console.error(error.message); 
    });


async function fetchDataWithAsyncAwait() {
    try {
        console.log("")
        console.log("fetchDataWithAsyncAwait")
        const result = await fetchData();  
        console.log(result.message);  
    } catch (error) {
        console.error(error.message);
    }
}


fetchDataWithAsyncAwait()