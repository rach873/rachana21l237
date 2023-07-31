<html>
<head>
    <title>Calculator</title>

    <style>
        button {
            width : 100%;
        }
        </style>

    
    </head>

    <body>

        <main>

            <table border="1">
                <tr>
                    <td colspan="3"><input value=" " id="input" type="text"></td>
                    <td><button onclick="clean()" >C</button></td>
                </tr>
                <tr>
                    <td><button onclick="dis(' 1 ')">1</button></td>
                    <td><button onclick="dis(' 2 ')">2</button></td>
                    <td><button onclick="dis(' 3 ')">3</button></td>
                    <td><button onclick="dis(' + ')">+</button></td>
                    </tr>
                    <tr>
                        <td><button onclick="dis(' 4 ')">4</button></td>
                        <td><button onclick="dis(' 5 ')">5</button></td>
                        <td><button onclick="dis(' 6 ')">6</button></td>
                        <td><button onclick="dis(' - ')">-</button></td>
                        </tr>
                        <tr>
                            <td><button onclick="dis(' 7 ')">7</button></td>
                            <td><button onclick="dis(' 8 ')">8</button></td>
                            <td><button onclick="dis(' 9 ')">9</button></td>
                            <td><button onclick="dis(' * ')">*</button></td>
                        </tr>
                      
                        <tr>
                            <td><button onclick="dis(' 0 ')">0</button></td>
                            <td><button onclick="dis(' . ')">.</button></td>
                            <td><button onclick="dis(' / ')">/</button></td>
                            <td><button onclick="solve()">=</button></td>
                        </tr> 
             </table>
        </main>
      <h1 id="result">Result</h1>
    <script>
        function dis(x) {
            if(document.getElementById("input").value == x){
                document.getElementById("input").value = " ";
                document.getElementById("input").value = x;
            }else{
                document.getElementById("input").value += x;
        }
    }
    function solve()
    {
        var x =document.getElementById("input").value;
         var y= eval(x);
         document.getElementById("input").value = y;
    }
        function clean() {
         document.getElementById("input").value = " ";
        }
    </script>