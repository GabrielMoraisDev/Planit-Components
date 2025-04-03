export const codeStringJs = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Login Form&lt;/title&gt;
    &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"&gt;
    &lt;style&gt;
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="w-full h-screen py-10 bg-slate-300 dark:bg-slate-900 flex justify-center place-items-center duration-300"&gt;
        &lt;div class="w-72 h-auto bg-slate-200 dark:bg-slate-800 pt-2 pb-6 rounded-md m-auto place-items-center shadow-lg duration-300"&gt;
            &lt;i class="bi bi-person-fill text-7xl flex justify-center text-slate-400 dark:text-slate-500 pt-4 pb-1"&gt;&lt;/i&gt;
            &lt;h1 class="text-xl text-slate-600 dark:text-slate-400 mt-0 text-center"&gt;Sign-in&lt;/h1&gt;
            &lt;div class="h-4"&gt;&lt;/div&gt;
            &lt;div class="inline m-auto"&gt;
                &lt;label for="user" class="text-slate-600 dark:text-slate-300"&gt;User&lt;/label&gt;&lt;br /&gt;
                &lt;input id="user" type="text" placeholder="Type your User..." class="text-slate-400 w-[16rem] flex justify-center mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300"/&gt;
            &lt;/div&gt;
 
            &lt;div class="h-3"&gt;&lt;/div&gt;
 
            &lt;div class="inline m-auto"&gt;
                &lt;label for="password" class="text-slate-600 dark:text-slate-300"&gt;Password&lt;/label&gt;&lt;br /&gt;
                &lt;input id="password" type="password" placeholder="Type your Password..." class="text-slate-400 w-[16rem] flex justify-center mt-1 px-4 py-1 text-left m-auto dark:bg-slate-800 focus:dark:bg-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-700 outline-none focus:border-black dark:focus:border-slate-300 focus:text-black dark:focus:text-white border rounded-md my-2 ring-0 duration-300"/&gt;
            &lt;/div&gt;
 
            &lt;div class="px-6 mt-6"&gt;
                &lt;button id="loginBtn" class="w-[16rem] h-auto py-2 bg-slate-300 text-slate-400 hover:text-white hover:bg-slate-400 dark:bg-slate-600 dark:text-slate-400 dark:hover:text-slate-900 dark:hover:bg-white rounded-md duration-300"&gt;Login&lt;/button&gt;
            &lt;/div&gt;
            
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;

        // Login button functionality
        document.getElementById('loginBtn').addEventListener('click', function() {
            const username = document.getElementById('user').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                alert('Please enter both username and password');
                return;
            }
            
            // Here you would typically send the login information to a server
            console.log('Login attempt:', { username, password });
            alert('Login attempt processed! This would connect to your authentication service in a real application.');
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`