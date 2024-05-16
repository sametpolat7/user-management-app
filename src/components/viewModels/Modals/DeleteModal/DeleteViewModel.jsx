import DeleteModal from '../../../views/Modals/DeleteModal/DeleteModal';

function DeleteViewModel({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  setIsDeleteConfirm
}) {
  const handleConfirm = () => {
    setIsDeleteConfirm(true);
  };

  const handleClose = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <DeleteModal
      isDeleteModalOpen={isDeleteModalOpen}
      setIsDeleteModalOpen={setIsDeleteModalOpen}
      setIsDeleteConfirm={setIsDeleteConfirm}
      handleClose={handleClose}
      handleConfirm={handleConfirm}
    />
  );
}

export default DeleteViewModel;
