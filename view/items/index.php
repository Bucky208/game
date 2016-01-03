<section>
  <h1>Items</h1>
  <div id="items-result">
    <?php if(empty($items)): ?>
    <p>No Items In Database</p>
    <?php else: ?>
    <ol>
    <?php foreach($items as $item): ?>
    <li><?php echo $item['title'];?></li>
    <?php endforeach;?>
    </ol>
    <?php endif;?>
  </div>
</section>
<section>
  <h2>Add Item</h2>
  <form method="post" action="index.php" id="itemAddForm">
    <div class="form-group<?php if(!empty($errors['title'])) echo ' has-error';?>">
      <label for="inputTitle">Title</label>
      <input type="text" class="form-control" id="inputTitle" placeholder="Enter Item Title" name="title" value="<?php if(!empty($_POST['title'])) echo $_POST['title'];?>">
      <?php if(!empty($errors['title'])) echo '<span class="help-block">' . $errors['title'] . '</span>'; ?>
    </div>
    <div class="form-group<?php if(!empty($errors['content'])) echo ' has-error';?>">
      <label for="inputContent">Content</label>
      <textarea class="form-control" id="inputContent" name="content" placeholder="Enter Item Content"><?php if(!empty($_POST['content'])) echo $_POST['content'];?></textarea>
      <?php if(!empty($errors['content'])) echo '<span class="help-block">' . $errors['content'] . '</span>'; ?>
    </div>
    <input type="hidden" name="action" value="add-item" />
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</section>
