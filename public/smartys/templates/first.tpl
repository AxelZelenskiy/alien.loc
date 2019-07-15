{include 'first_header.tpl'}
<h1>{$something}</h1>
<h2> Hello i'm {$pony->type} </h2>


<p>
    Does {$pony->type} want to eat? - Pony says {$pony->say} </p>
<p> Would pone eat sugar - {$pony->eatIt("sugar")}
</p>
<p>Would pone eat grass - {$pony->eatIt("grass")}


</p>
<hr>
{include 'first_footer.tpl'}