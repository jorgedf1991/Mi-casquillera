const multer = require('multer');
const path = require('path');

function uploadProductImgMiddleware() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            let folder = path.join(__dirname, '../public/img/products')
            cb(null, folder);
        },
        filename: (req, file, cb) => {
            let imageName = Date.now() + path.extname(file.originalname);
            cb(null, imageName);
        }
    })

    return multer({ storage });
}


function uploadUserImgMiddleware() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            let folder = path.join(__dirname, '../public/img/imageUsers')
            cb(null, folder);
        },
        filename: (req, file, cb) => {
            let imageName = Date.now() + path.extname(file.originalname);
            cb(null, imageName);
        }
    })

    return multer({ storage });
}

module.exports = { uploadProductImgMiddleware, uploadUserImgMiddleware };
