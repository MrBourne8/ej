<!-- Modal Edit-->
<div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content shadow">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Редактировать предмет <?= $value['predmet'] ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="?id=<?= $value['id'] ?>" method="post" id="qw">
                    <div class="form-group">
                        <p class="edit__predmet" name="edit_students" value="<?= $value['students'] ?>"><?= $value['students'] ?></p>

                        <input type="text" class="form-control edit__pred" hidden name="edit_students" value="<?= $value['students'] ?>">
                    </div>
                    <div class="form-group edit__notes">
                        <p>Иностранный язык</p>
                        <select class="form-control edit__note" id="edit__note_01" name="edit_pred_01" value="<?= $value['pred_01'] ?>">
                            <option value=""></option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="number" class="form-control edit__note" id="edit__note_01" name="edit_pred_01" value="<?= $value['pred_01'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Физическая культура</p>
                        <input type="number" class="form-control edit__note" id="edit__note_02" name="edit_pred_02" value="<?= $value['pred_02'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Основы программирования</p>
                        <input type="number" class="form-control edit__note" id="edit__note_03" name="edit_pred_03" value="<?= $value['pred_03'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Прикладное программирование</p>
                        <input type="number" class="form-control edit__note" id="edit__note_04" name="edit_pred_04" value="<?= $value['pred_04'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Элементы высшей математики</p>
                        <input type="number" class="form-control edit__note" id="edit__note_05" name="edit_pred_05" value="<?= $value['pred_05'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Операционные системы</p>
                        <input type="number" class="form-control edit__note" id="edit__note_06" name="edit_pred_06" value="<?= $value['pred_06'] ?>">
                    </div>
                    <hr>
                    <div class="form-group edit__notes">
                        <p>Теория алгоритмов</p>
                        <input type="number" class="form-control edit__note" id="edit__note_07" name="edit_pred_07" value="<?= $value['pred_07'] ?>">
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="submit" name="edit-submit" class="btn btn-primary">Обновить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- DELETE MODAL -->
<div class="modal fade" id="deleteModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content shadow">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Удалить предмет <?= $value['predmet'] ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <form action="?id=<?= $value['id'] ?>" method="post">
                    <button type="submit" name="delete_submit" class="btn btn-danger">Удалить</button>
                </form>
            </div>
        </div>
    </div>
</div>