const VerifyIfAttendanceExists =() => {
    const attendance = await Attendance.findOne({
        where: {
          bookId,
          vetId
        }
    })

    if (attendance) return true
    return false
}