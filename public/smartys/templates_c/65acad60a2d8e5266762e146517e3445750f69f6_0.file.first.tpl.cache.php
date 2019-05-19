<?php
/* Smarty version 3.1.33, created on 2019-05-19 13:56:12
  from 'F:\OpenServer5.3.0\OSPanel\domains\alien.loc\public\smartys\templates\first.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5ce1364c37f201_04522965',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '65acad60a2d8e5266762e146517e3445750f69f6' => 
    array (
      0 => 'F:\\OpenServer5.3.0\\OSPanel\\domains\\alien.loc\\public\\smartys\\templates\\first.tpl',
      1 => 1558263371,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:first_header.tpl' => 1,
    'file:first_footer.tpl' => 1,
  ),
),false)) {
function content_5ce1364c37f201_04522965 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->compiled->nocache_hash = '17878855645ce1364c288bb0_62685145';
$_smarty_tpl->_subTemplateRender('file:first_header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<h1><?php echo $_smarty_tpl->tpl_vars['something']->value;?>
</h1>
<h2> Hello i'm <?php echo $_smarty_tpl->tpl_vars['pony']->value->type;?>
 </h2>


<p>
    Does <?php echo $_smarty_tpl->tpl_vars['pony']->value->type;?>
 want to eat? - Pony says <?php echo $_smarty_tpl->tpl_vars['pony']->value->say;?>
 </p>
<p> Would pone eat sugar - <?php echo $_smarty_tpl->tpl_vars['pony']->value->eatIt("sugar");?>

</p>
<p>Would pone eat grass - <?php echo $_smarty_tpl->tpl_vars['pony']->value->eatIt("grass");?>



</p>
<hr>
<?php $_smarty_tpl->_subTemplateRender('file:first_footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 9999, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
