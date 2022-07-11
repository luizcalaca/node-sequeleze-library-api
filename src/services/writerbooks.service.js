const VerifyIfAutorBookExists =() => {
    const writerbook = await Attendance.findOne({
        where: {
          bookId,
          writerId
        }
    })

    if (writerbook) return true
    return false
}