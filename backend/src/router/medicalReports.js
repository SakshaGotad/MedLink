
const medicalReports =async(req, res)=>{
    
    const awStorage = new appwriteSdk.Storage(setupAppWrite());

    const fileName = req.userFileNameAdd 
        const fileLocation = path.join(__dirname, "..", "uploads", fileName)

        return Promise.resolve()
            .then(() => {
                const inputFile = InputFile.fromPath(fileLocation)
                return awStorage.createFile(process.env.APPWRITE_BUCKET, fileName, inputFile)
            })
            .then((fileUploaded) => {
                return MedicalReports.create({
                    appointmentId: req.body.appointmentId,
                    fileUrl: fileUploaded.$id
                })
            })
            .then(doc => {
                return res.status(201).json({
                    message: "upload successful",
                    error: null,
                    data: doc
                })
            })
            .catch(error => {
                console.log("=== error : ", error)
                return res.status(422).json({
                    message: "upload failed",
                    error: error,
                    data: null
                })
            })

}