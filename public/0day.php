<?php
function xd($something) {
	echo '<pre>';
	var_dump($something);
	echo "</pre>";
};
$parsed_data = <<<EOL
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
<ns2:createGlobalNaturalCustomerResponse xmlns:ns2="http://v4.xxxxxx.xxxxxxx.com/">
<return>
<householdId>568282</householdId>
<addressDTO>
<addressInformationIn>
<identifier>900455750</identifier>
<line1>Змінити на реальну вулицю</line1>
<postalCode>12345</postalCode>
<city>КИЇВ</city>
<countryCode>UA</countryCode>
<mainAddress>true</mainAddress>
<goneaway>false</goneaway>
</addressInformationIn>
<customerNumber>1200311786</customerNumber>
<historyInput>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</historyInput>
</addressDTO>
<contacts>
<classifications>
<customerNumber>1200311786</customerNumber>
<classifications>
<value>11</value>
<typeCode>1</typeCode>
</classifications>
<historyInputDTO>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</historyInputDTO>
</classifications>
<leisures>
<customerNumber>1200311786</customerNumber>
<leisures>
<typeCode>11</typeCode>
<levelCode>1</levelCode>
</leisures>
<leisures>
<typeCode>7</typeCode>
<levelCode>3</levelCode>
</leisures>
<leisures>
<typeCode>9</typeCode>
<levelCode>1</levelCode>
</leisures>
<leisures>
<typeCode>8</typeCode>
<levelCode>1</levelCode>
</leisures>
<history>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</history>
</leisures>
<customerDTO>
<title>1</title>
<firstName>t4-І-023-2019-07-03-1</firstName>
<name>t4-П-023-2019-07-03-1</name>
<managementEntityNumber>3</managementEntityNumber>
<householdIdentifier>568282</householdIdentifier>
<customerNumber>1200311786</customerNumber>
<mainContact>true</mainContact>
<language>UK</language>
<customerStatus>0</customerStatus>
<history>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</history>
</customerDTO>
<communications>
<communications>
<communicationScopes>
<code>1</code>
</communicationScopes>
<identifier>313702</identifier>
<value>0671234567</value>
<type>1</type>
<phoneType>2</phoneType>
<order>0</order>
<main>true</main>
</communications>
<customerNumber>1200311786</customerNumber>
<historyInputDTO>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</historyInputDTO>
</communications>
</contacts>
<history>
<operatorIdentifier>12000907</operatorIdentifier>
<operatorFullName>Name Surname</operatorFullName>
<applicationCode>1</applicationCode>
<entityNumber>3</entityNumber>
<buNumber>23</buNumber>
<operatorIdentifierType>LDAP</operatorIdentifierType>
</history>
</return>
</ns2:createGlobalNaturalCustomerResponse>
</soap:Body>
</soap:Envelope>
EOL;
// xd($parsed_data);
$xml_simple =  new SimpleXMLElement($parsed_data);
// file_put_contents('0day.txt',$parsed_data,FILE_APPEND);
$new_try = explode(PHP_EOL, $parsed_data);
xd($new_try);

$xmlstr = <<<XML
<?xml version='1.0' standalone='yes'?>
<movies>
 <movie>
  <title>PHP: Появление Парсера</title>
  <characters>
   <character>
    <name>Ms. Coder</name>
    <actor>Onlivia Actora</actor>
   </character>
   <character>
    <name>Mr. Coder</name>
    <actor>El Act&#211;r</actor>
   </character>
  </characters>
  <plot>
   Таким образом, это язык. Это все равно язык программирования. Или
   это скриптовый язык? Все раскрывается в этом документальном фильме,
   похожем на фильм ужасов.
  </plot>
  <great-lines>
   <line>PHP решает все мои проблемы в вебе</line>
  </great-lines>
  <rating type="thumbs">7</rating>
  <rating type="stars">5</rating>
 </movie>
</movies>
XML;

$movies = new SimpleXMLElement($xmlstr);

echo $movies->movie[0]->plot;