<?php
//var_dump(file_exists(__DIR__.'\\..\\vendor\\autoload.php'));
require_once (__DIR__.'\\..\\vendor\\autoload.php');


class Smarty_GuestBook extends Smarty {

    function __construct()
    {

        // Class Constructor.
        // These automatically get set with each new instance.

        parent::__construct();

        $this->setTemplateDir(__DIR__.'\\smartys\\templates\\');
        $this->setCompileDir(__DIR__.'\\smartys\\templates_c\\');
        $this->setConfigDir(__DIR__.'\\smartys\\configs\\');
        $this->setCacheDir(__DIR__.'\\smartys\\cache\\');

        $this->caching = Smarty::CACHING_LIFETIME_CURRENT;
//        $this->assign('app_name', 'Guest Book');
    }

}

class Megogogo {
    public $type = "Small horse";
    public $say = "Igogogogogo";

    public function eatIt(string $param)
    {
        return ($param === 'grass') ? "Ok, i'll eat it." : "No way.";
    }
}
$pony = new Megogogo();
$str_variable = 'Some h1 header for tests only';
$footer_variable = 'Hello. It\'s me - \'your footer variable\' ';
$header_variable = 'Hello. It\'s me - \'your header variable\' ';
$smart = new Smarty_GuestBook();
$smart->assign("something",$str_variable);
$smart->assign('fvar',$footer_variable);
$smart->assign('hvar',$header_variable);
$smart->assignByRef('pony', $pony);
$smart->display("first.tpl");

