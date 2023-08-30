let queueOpen = false;

exports.getStatusQueue = (req, res) => {
  res.json({ isOpen: queueOpen });
};

exports.setStatusQueue = (req, res) => {
  queueOpen = req.body.status;
  let message =
    queueOpen === true
      ? "Antrian berhasil dibuka"
      : "Antrian berhasil di tutup";
  res.json({ message });
};
