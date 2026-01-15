    'use strict';
    let nums = [1, 1, 1, 0, 1];

    function mostrar(nums) {
        let contador = 0; 
        let i = 0;
        while (i < nums.length) {
            if (nums[i] === 1) {
                contador++;
            }
            i++;
        }
        return contador;
    }

    let unos = mostrar(nums);
    alert(unos)