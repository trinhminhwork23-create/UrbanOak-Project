/* ==========================================================================
   FILENAME: assets/js/db.js
   AUTHOR: Team UrbanOak
   DESCRIPTION: Mock Database chứa dữ liệu sản phẩm chi tiết.
   STRUCTURE: Array of Objects với đầy đủ thông tin metadata.
   ========================================================================== */

/**
 * CẤU TRÚC DỮ LIỆU SẢN PHẨM (PRODUCT SCHEMA)
 * @typedef {Object} ProductSpecifications
 * @property {string} material - Chất liệu chính
 * @property {string} dimensions - Kích thước (Dài x Rộng x Cao)
 * @property {string} weight - Trọng lượng sản phẩm
 * @property {string} warranty - Thời gian bảo hành
 * * @typedef {Object} Product
 * @property {string} id - Mã định danh (Unique)
 * @property {string} name - Tên sản phẩm
 * @property {string} category - Danh mục (chair, desk, shelf, lamp, accessory)
 * @property {number} price - Giá bán hiện tại (VNĐ)
 * @property {number} originalPrice - Giá gốc (để tính % giảm giá)
 * @property {string} thumb - Ảnh đại diện (Thumbnail)
 * @property {string[]} gallery - Mảng chứa danh sách ảnh chi tiết
 * @property {string} shortDesc - Mô tả ngắn (cho thẻ sản phẩm)
 * @property {string} detailedDesc - Mô tả chi tiết (cho trang Detail)
 * @property {ProductSpecifications} specs - Thông số kỹ thuật
 * @property {number} rating - Điểm đánh giá (1-5)
 * @property {number} stock - Số lượng tồn kho
 * @property {string[]} tags - Nhãn dán (New, Best Seller, Sale)
 */

/** @type {Product[]} */
const products = [
    // ================= KHU VỰC: GHẾ CÔNG THÁI HỌC (CHAIRS) =================
    {
        id: "chair-lumina-pro",
        name: "Lumina ErgoChair Pro Max",
        category: "chair",
        price: 8900000,
        originalPrice: 12500000,
        thumb: "assets/img/products/chair-lumina-thumb.jpg",
        gallery: [
            "assets/img/products/chair-lumina-1.jpg",
            "assets/img/products/chair-lumina-2.jpg"
        ],
        shortDesc: "Đỉnh cao công thái học, lưới Mesh nhập khẩu Đức.",
        detailedDesc: "Lumina ErgoChair Pro Max là dòng ghế cao cấp nhất của UrbanOak. Được trang bị bộ máy điều chỉnh kháng lực đa điểm, tựa đầu 3D và đệm lưng dưới (Lumbar Support) tự động điều chỉnh theo cột sống.",
        specs: {
            material: "Lưới Krall & Roth (Đức), Khung nhôm đúc",
            dimensions: "70 x 70 x 115-130 cm",
            weight: "28kg",
            warranty: "5 Năm Chính Hãng"
        },
        rating: 4.9,
        stock: 10,
        tags: ["Best Seller", "Sale"]
    },
    {
        id: "chair-urban-lite",
        name: "Urban Lite Office Chair",
        category: "chair",
        price: 2850000,
        originalPrice: 3500000,
        thumb: "assets/img/products/chair-lite-thumb.jpg",
        gallery: [],
        shortDesc: "Thiết kế tối giản, phù hợp văn phòng hiện đại.",
        detailedDesc: "Dòng ghế Urban Lite tập trung vào sự gọn nhẹ nhưng vẫn đảm bảo sự êm ái nhờ đệm mút đúc nguyên khối High Density. Phù hợp cho không gian làm việc nhỏ hoặc Home Office.",
        specs: {
            material: "Nhựa ABS chịu lực, Vải nỉ cao cấp",
            dimensions: "60 x 60 x 100-110 cm",
            weight: "12kg",
            warranty: "12 Tháng"
        },
        rating: 4.5,
        stock: 50,
        tags: ["New"]
    },
    {
        id: "chair-ceo-leather",
        name: "President Leather Chair",
        category: "chair",
        price: 15900000,
        originalPrice: 15900000,
        thumb: "assets/img/products/chair-ceo-thumb.jpg",
        gallery: [],
        shortDesc: "Da bò Ý thật 100%, đẳng cấp lãnh đạo.",
        detailedDesc: "Sự kết hợp hoàn hảo giữa gỗ Sồi tự nhiên và da bò thuộc thủ công. Mỗi chiếc ghế là một tác phẩm nghệ thuật, mang lại sự uy nghiêm cho phòng giám đốc.",
        specs: {
            material: "Da bò Italia, Gỗ Sồi, Thép không gỉ",
            dimensions: "80 x 75 x 125 cm",
            weight: "35kg",
            warranty: "10 Năm Khung Gỗ"
        },
        rating: 5.0,
        stock: 3,
        tags: ["Luxury"]
    },

    // ================= KHU VỰC: BÀN LÀM VIỆC (DESKS) =================
    {
        id: "desk-standing-smart",
        name: "SmartDesk Pro (Nâng Hạ)",
        category: "desk",
        price: 9500000,
        originalPrice: 10500000,
        thumb: "assets/img/products/desk-smart-thumb.jpg",
        gallery: [],
        shortDesc: "Bàn nâng hạ chiều cao tự động, động cơ kép êm ái.",
        detailedDesc: "Thay đổi tư thế làm việc chỉ với một nút bấm. SmartDesk Pro giúp bạn luân phiên đứng và ngồi, giảm thiểu đau lưng và tăng cường sự tập trung. Mặt bàn gỗ công nghiệp phủ Melamine chống trầy.",
        specs: {
            material: "Chân thép sơn tĩnh điện, Mặt gỗ MDF",
            dimensions: "140 x 70 x 70-120 cm",
            weight: "45kg",
            warranty: "3 Năm Động Cơ"
        },
        rating: 4.8,
        stock: 15,
        tags: ["Trending"]
    },
    {
        id: "desk-oak-solid",
        name: "Oak Solid Workbench",
        category: "desk",
        price: 6200000,
        originalPrice: 0,
        thumb: "assets/img/products/desk-oak-thumb.jpg",
        gallery: [],
        shortDesc: "Bàn gỗ sồi nguyên tấm, chân chữ Z phá cách.",
        detailedDesc: "Được chế tác từ gỗ sồi Mỹ nhập khẩu. Vân gỗ tự nhiên sắc nét. Chân bàn thiết kế hình chữ Z độc đáo tạo cảm giác vững chãi và thẩm mỹ.",
        specs: {
            material: "Gỗ Sồi (Oak) Solid, Chân sắt",
            dimensions: "160 x 80 x 75 cm",
            weight: "30kg",
            warranty: "2 Năm"
        },
        rating: 4.7,
        stock: 8,
        tags: []
    },
    {
        id: "desk-corner-l",
        name: "Studio L-Shape Desk",
        category: "desk",
        price: 4500000,
        originalPrice: 5000000,
        thumb: "assets/img/products/desk-l-thumb.jpg",
        gallery: [],
        shortDesc: "Bàn góc chữ L, tối ưu không gian studio.",
        detailedDesc: "Giải pháp hoàn hảo cho các góc phòng. Diện tích mặt bàn rộng gấp đôi bàn thường, đủ chỗ cho 3 màn hình và dàn loa.",
        specs: {
            material: "Khung thép hộp, Gỗ MFC An Cường",
            dimensions: "140 x 140 x 75 cm",
            weight: "40kg",
            warranty: "12 Tháng"
        },
        rating: 4.6,
        stock: 20,
        tags: ["Sale"]
    },

    // ================= KHU VỰC: TỦ & KỆ (SHELVES) =================
    {
        id: "shelf-3-drawer",
        name: "Minimalist Cabinet 3",
        category: "shelf",
        price: 1200000,
        originalPrice: 1500000,
        thumb: "assets/img/products/shelf-3-thumb.jpg",
        gallery: [],
        shortDesc: "Tủ tài liệu 3 ngăn di động, có khóa an toàn.",
        detailedDesc: "Tủ phụ di động với bánh xe xoay 360 độ. Thiết kế vừa vặn dưới gầm bàn. Ngăn kéo sử dụng ray trượt bi 3 tầng êm ái.",
        specs: {
            material: "Thép sơn tĩnh điện",
            dimensions: "40 x 50 x 60 cm",
            weight: "15kg",
            warranty: "12 Tháng"
        },
        rating: 4.4,
        stock: 100,
        tags: []
    },
    {
        id: "shelf-book-tower",
        name: "Oak Book Tower",
        category: "shelf",
        price: 3800000,
        originalPrice: 0,
        thumb: "assets/img/products/shelf-book-thumb.jpg",
        gallery: [],
        shortDesc: "Kệ sách đứng gỗ sồi, 5 tầng lưu trữ.",
        detailedDesc: "Thiết kế dạng tháp giúp tiết kiệm diện tích sàn nhưng tối đa hóa không gian lưu trữ sách và đồ trang trí.",
        specs: {
            material: "Gỗ sồi tự nhiên",
            dimensions: "60 x 30 x 180 cm",
            weight: "25kg",
            warranty: "2 Năm"
        },
        rating: 4.8,
        stock: 12,
        tags: ["New"]
    },

    // ================= KHU VỰC: PHỤ KIỆN & ĐÈN (ACCESSORIES) =================
    {
        id: "acc-monitor-arm",
        name: "Dual Monitor Arm VESA",
        category: "accessory",
        price: 1500000,
        originalPrice: 1900000,
        thumb: "assets/img/products/acc-arm-thumb.jpg",
        gallery: [],
        shortDesc: "Tay đỡ 2 màn hình, chịu tải 9kg/tay.",
        detailedDesc: "Hỗ trợ màn hình từ 17-32 inch. Có lò xo khí nén (Gas Spring) giúp di chuyển màn hình nhẹ nhàng bằng một ngón tay.",
        specs: {
            material: "Nhôm hàng không, Nhựa ABS",
            weight: "4kg",
            dimensions: "N/A",
            warranty: "12 Tháng"
        },
        rating: 4.9,
        stock: 30,
        tags: ["Must Have"]
    },
    {
        id: "acc-desk-lamp",
        name: "Pixar Architect Lamp",
        category: "lamp",
        price: 650000,
        originalPrice: 0,
        thumb: "assets/img/products/acc-lamp-thumb.jpg",
        gallery: [],
        shortDesc: "Đèn bàn kẹp phong cách kiến trúc sư.",
        detailedDesc: "Thân đèn cơ động, có thể vươn dài hoặc thu gọn. Sử dụng bóng LED chống cận thị, ánh sáng vàng ấm áp.",
        specs: {
            material: "Kim loại sơn đen nhám",
            dimensions: "Vươn dài 80cm",
            weight: "1.2kg",
            warranty: "6 Tháng"
        },
        rating: 4.3,
        stock: 60,
        tags: []
    },
    {
        id: "acc-pegboard",
        name: "Wall Pegboard Kit",
        category: "accessory",
        price: 850000,
        originalPrice: 1000000,
        thumb: "assets/img/products/acc-pegboard-thumb.jpg",
        gallery: [],
        shortDesc: "Bảng ghim treo tường đa năng kèm phụ kiện.",
        detailedDesc: "Bộ Kit bao gồm 1 bảng Pegboard lớn và 10 móc treo các loại. Giúp bạn tổ chức không gian làm việc gọn gàng và đầy cảm hứng.",
        specs: {
            material: "Thép hoặc Gỗ Plywood",
            dimensions: "60 x 120 cm",
            weight: "3kg",
            warranty: "12 Tháng"
        },
        rating: 4.7,
        stock: 25,
        tags: ["New"]
    },
    {
        id: "acc-keyboard-mat",
        name: "Felt Desk Mat (Dark Grey)",
        category: "accessory",
        price: 250000,
        originalPrice: 350000,
        thumb: "assets/img/products/acc-mat-thumb.jpg",
        gallery: [],
        shortDesc: "Thảm trải bàn nỉ lông cừu nhân tạo.",
        detailedDesc: "Mang lại cảm giác ấm áp và mềm mại cho đôi tay. Giúp chuột di chuyển chính xác hơn và bảo vệ mặt bàn.",
        specs: {
            material: "Nỉ (Felt) & Cao su chống trượt",
            dimensions: "90 x 40 cm",
            weight: "0.5kg",
            warranty: "N/A"
        },
        rating: 4.6,
        stock: 200,
        tags: ["Sale"]
    }
];

// =======================================================
// BUSINESS LOGIC (LOGIC NGHIỆP VỤ)
// =======================================================

/**
 * Lấy toàn bộ sản phẩm
 * @returns {Product[]}
 */
function getAllProducts() {
    return products;
}

/**
 * Tìm sản phẩm theo ID
 * @param {string} id 
 * @returns {Product}
 */
function getProductById(id) {
    return products.find(p => p.id === id);
}

/**
 * Lọc sản phẩm theo danh mục
 * @param {string} category 
 * @returns {Product[]}
 */
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}

/**
 * Lấy danh sách sản phẩm nổi bật (Có tag Best Seller hoặc Trending)
 * Dùng cho trang chủ
 * @param {number} limit - Số lượng sản phẩm muốn lấy (mặc định 4)
 * @returns {Product[]}
 */
function getFeaturedProducts(limit = 4) {
    // Lọc ra các sản phẩm có tag 'Best Seller' hoặc 'Trending' hoặc 'Luxury'
    const featured = products.filter(p => 
        p.tags.includes('Best Seller') || 
        p.tags.includes('Trending') || 
        p.tags.includes('Luxury')
    );
    // Trả về số lượng giới hạn
    return featured.slice(0, limit);
}

/**
 * Format tiền tệ Việt Nam (Helper function)
 * @param {number} money 
 * @returns {string} (VD: "8.900.000 ₫")
 */
function formatCurrency(money) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money);
}