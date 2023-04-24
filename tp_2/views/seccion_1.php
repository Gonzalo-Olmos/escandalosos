
<p>
En la sección 1 crear un botón Inicia que al hacer clic muestre un reloj en cuenta
regresiva y que otro botón Termina detenga la cuenta regresiva. Que la cuenta vaya
desde 90 segundos y cuando llega a cero cambia de color y comienza a mostrar el
tiempo de forma incremental con un cartel de OVERTIME. Puede detenerse en cualquier
momento, no hace falta que llegue a OVERTIME
Al presionar el botón Termina además deja visible el tiempo transcurrido, el cartel de
OVERTIME y agrega a la vista un valor con la cantidad de tiempo total
</p>

<div class="row text-center">
    <div class="col-6">
        <h3 id="contador">90 seg.</h3>
    </div>
</div>
<div class="row text-center">
    <div class="col-3">
        <button class="btn btn-primary" id="inicio-contador">Inicia</button>
    </div>
    <div class="col-3">
        <button class="btn btn-secondary disabled" id="fin-contador">Termina</button>
    </div>
</div>
<div class="row text-center">
    <div class="col-6">
        <p id="tiempo-total"></p>
    </div>
</div>