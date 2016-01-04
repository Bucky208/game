<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'ItemDAO.php';

class ItemsController extends Controller {

	private $itemDAO;

	function __construct() {
		$this->itemDAO = new ItemDAO();
	}

	public function index() {
    $this->_processAddItemFormIfNeeded();
    $items = $this->itemDAO->selectAll();
    if($this->isAjax) {
      header('Content-Type: application/json');
      echo json_encode($items);
      exit();
    }
    $this->set('items', $items);
	}

  private function _processAddItemFormIfNeeded() {
      //var_dump($_POST);
      //$data = array_merge($_POST, array('created' => date('Y-m-d H:i:s')));

          //$result = $this->itemDAO->insert($data);

    if(!empty($_POST)) {
      $data = array_merge($_POST, array('created' => date('Y-m-d H:i:s')));
      $result = $this->itemDAO->insert($data);
          header('Content-Type: application/json');
          echo json_encode(array('result' => 'ok', 'inserted_id' => $result));
    }
  }

}
