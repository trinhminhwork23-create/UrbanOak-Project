const products = [
    {
        id: 'chair-winston-vip',
        name: 'Ghế Giám Đốc WINSTON – Quyền uy dẫn lối thành công',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 28900000,
        badges: ['Best Seller', 'Da Nappa', 'Italia'],
        thumb: 'https://images.unsplash.com/photo-1598590453372-bfc0e4b4e6b5?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1598590453372-bfc0e4b4e6b5?w=1600',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=1600'
        ],
        shortDesc: 'Ghế lãnh đạo cao cấp. Da Nappa Ý nhập khẩu, khung gỗ Sồi Đen, cơ chế điều chỉnh 4D.',
        story: 'WINSTON là biểu tượng của quyền uy và quyết đoán. Mỗi đường nét được chạm khắc tỉ mỉ, cụa thể là đệm lưng có đường ren tinh xảo, tay armrest được bao bọc da cao cấp với khóa bạc. Được thiết kế bởi nhóm thiết kế nổi tiếng từ Milan, WINSTON không chỉ là nơi ngồi mà còn là tuyên ngôn về phong cách và đẳng cấp. Khung chân được làm từ thép không gỉ mạ vàng, mang lại sự vững chắc và sang trọng.',
        specs: {
            "Chất liệu chính": "Da Bò Nappa Ý (loại A), Gỗ Sồi Đen tự nhiên",
            "Khung": "Thép không gỉ 201 mạ vàng 24K",
            "Đệm": "Foam cao cấp 10cm + Lò xo nhân tạo",
            "Kích thước": "Rộng 780mm x Sâu 820mm x Cao 1280mm",
            "Độ cao ghế": "450-540mm (điều chỉnh khí nén)",
            "Mech. Tilt": "Cơ chế gập nghiêng 135° với khóa",
            "Tay armrest": "4D (cao, thấp, trước, sau)",
            "Trọng lượng": "32kg",
            "Công suất tối đa": "150kg",
            "Tuổi thọ": "12+ năm (nếu bảo dưỡng đúng)",
            "Bảo hành": "10 năm khung, 5 năm đệm",
            "Xuất xứ": "Handmade tại Cascina, Italia"
        }
    },
    {
        id: 'chair-lumina-pro',
        name: 'Ghế Văn Phòng LUMINA PRO – Thoải mái trong mỗi giờ làm việc',
        category: 'chair',
        categoryName: 'Ghế Văn Phòng',
        price: 15500000,
        badges: ['Ergonomic', 'ISO9001', 'CE Certified'],
        thumb: 'https://images.unsplash.com/photo-1598300056681-f8e0f05a9a99?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1598300056681-f8e0f05a9a99?w=1600',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=1600'
        ],
        shortDesc: 'Ghế văn phòng ergonomic chứng chỉ quốc tế. Lưới thoáng khí, tựa lưng trúc xanh.',
        story: 'LUMINA PRO được thiết kế theo ISO11228 và EN1335 (tiêu chuẩn ergonomic quốc tế). Sử dụng lưới thoáng khí từ Đức (Knoll mesh), tựa lưng cong 3D giúp bảo vệ cột sống. Được các bác sĩ chỉnh hình khuyên dùng cho người làm việc 8+ giờ/ngày. Mỗi ghế được test kiểm chất lượng 48 giờ trước khi gửi đi.',
        specs: {
            "Chất liệu lưới": "Polyester thoáng khí (Knoll - Đức), cản tia UV",
            "Tựa lưng": "Với khóa vùng thắt lưng L/S điều chỉnh",
            "Đệm ngồi": "Foam Cold-cure 8cm, êm ái",
            "Khung": "Nhựa PA66 Glasfill 30% + Thép gia cứng",
            "Bánh xe": "Nylon cứng (cho sàn gỗ), PU mềm (cho sàn bê tông)",
            "Kích thước": "Rộng 680mm x Sâu 750mm x Cao 1050-1150mm",
            "Chiều cao ngồi": "430-530mm (điều chỉnh khí nén)",
            "Tay armrest": "3D (điều chỉnh), có đệm polyurethane",
            "Cơ chế": "Multi-tilt (3 vị trí lock), gập đảo ngược",
            "Công suất tối đa": "120kg",
            "Bảo hành": "5 năm khung, 2 năm tựa lưng",
            "Chứng chỉ": "ISO 9001, EN 1335-1, BIFMA"
        }
    },
    {
        id: 'desk-concorde-vip',
        name: 'Bàn Giám Đốc CONCORDE – Tuyên ngôn của quyền lực',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 45000000,
        badges: ['Gỗ Nguyên Tấm', 'Limited 50/Year', 'Kiểm định Wood'],
        thumb: 'https://images.unsplash.com/photo-1593642632623-8f785e4fb5b0?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1593642632623-8f785e4fb5b0?w=1600',
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1600',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1600'
        ],
        shortDesc: 'Bàn gỗ Walnut nguyên tấm 80 năm tuổi, khung thép mạ vàng 24K. Limited Edition chỉ 50 chiếc/năm.',
        story: 'CONCORDE là tuyên ngôn của quyền lực. Mỗi tấm gỗ Walnut được tuyển chọn thủ công từ các cánh rừng Alabama (USA) độ 80+ năm tuổi. Mặt bàn được chế biến trong 6 tháng: sơn, mài, xử lý UV, bên dưới có lớp cách nhiệt từ Đức. Khung thép được rèn từ những cây thép tận dụng từ chiếc máy bay siêu tốc Concorde cũ (huyền thoại), mạ vàng 24K bằng tay. Mỗi chiếc bàn đều có chứng chỉ độc lập từ các chuyên gia gỗ.',
        specs: {
            "Loại gỗ": "Walnut đen (Black Walnut), 80-120 tuổi",
            "Xuất xứ gỗ": "Alabama, USA",
            "Độ dày mặt": "50mm (nguyên tấm, không ghép)",
            "Lớp xử lý": "UV polyurethane 7 lớp + Sơn dầu Tung",
            "Khung": "Thép carbon 50mm mạ vàng 24K (rèn thủ công)",
            "Cách nhiệt": "Lớp lót Masonite Đức, cách âm",
            "Quản lý dây": "Lỗ cáp ẩn 50mm, ống kim loại luồn dây",
            "Kích thước": "Dài 2200mm x Rộng 950mm x Cao 750mm",
            "Trọng lượng": "135kg (không tính đóng gói)",
            "Công suất tối đa": "400kg",
            "Chân điều chỉnh": "Điều chỉnh độ cao ±20mm",
            "Bảo hành": "Trọn đời (khung thép)",
            "Chứng chỉ": "Kiểm định gỗ tự nhiên, CE EN 527",
            "SX": "Handmade 100% tại Florence, Italia"
        }
    },
    {
        id: 'desk-executive-slim',
        name: 'Bàn Giám Đốc EXECUTIVE SLIM – Tối giản nhưng vô tận',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 28500000,
        badges: ['Modern', 'Modular', 'Scandinavian'],
        thumb: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600',
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1600'
        ],
        shortDesc: 'Bàn hiện đại Scandinavian. Gỗ Sồi lương tâm, khung thép modular, 3 ngăn kéo ẩn.',
        story: 'EXECUTIVE SLIM được trở nên nổi tiếng từ các công ty Silicon Valley. Thiết kế tối giản với chức năng vô tận. Mặt bàn gỗ Sồi từ Bắc Âu (certified FSC 100%), khung thép có thể tháo lắp để thích ứng với không gian khác nhau. Có hệ thống quản lý dây ẩn bên dưới khiến mặt bàn luôn sạch sẽ. 3 ngăn kéo ẩn dưới mặt bàn chứa được tài liệu, phụ kiện công sở.',
        specs: {
            "Chất liệu mặt": "Gỗ Sồi (Oak), certified FSC 100%",
            "Khung": "Thép sơn tĩnh điện (RAL 9016 - trắng sữa)",
            "Kích thước": "Dài 1800mm x Rộng 750mm x Cao 750mm",
            "Độ dày mặt": "28mm",
            "Ngăn kéo": "3 ngăn kéo ẩn (Silent close), dung tích mỗi ngăn 15L",
            "Lỗ cáp": "4 lỗ cáp Φ50mm + Ống luồn dây",
            "Chân điều chỉnh": "4 chân điều chỉnh độ cao ±10mm",
            "Trọng lượng": "48kg",
            "Công suất tối đa": "200kg",
            "Tháo lắp": "Thiết kế modular, dễ tháo lắp",
            "Bảo hành": "5 năm",
            "Chứng chỉ": "FSC 100%, CE EN 527"
        }
    },
    {
        id: 'lamp-aurora-vip',
        name: 'Đèn Bàn AURORA – Ánh sáng của sự tạo hóa',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 18500000,
        badges: ['Smart IoT', 'Handmade', 'Murano Glass'],
        thumb: 'https://images.unsplash.com/photo-1565636192335-14c66f859066?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1565636192335-14c66f859066?w=1600',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600'
        ],
        shortDesc: 'Đèn bàn thông minh IoT. Thủy tinh Murano Ý thổi thủ công, LED tunable 2700-6500K.',
        story: 'AURORA được lấy cảm hứng từ hiện tượng cực quang. Mỗi chiếc đèn có phần thủy tinh Murano được thổi thủ công tại Venice, mỗi chiếc đều độc nhất. Công nghệ LED tri-color (RGB) cho phép tuning màu sáng từ ấm (2700K) đến lạnh (6500K). Tích hợp cảm biến ánh sáng môi trường, tự điều chỉnh độ sáng. Có ứng dụng di động để điều khiển từ xa, lên lịch sáng tắt theo chu kỳ tuần. Tiết kiệm 85% điện so với đèn truyền thống.',
        specs: {
            "Loại gỗ": "Thủy tinh Murano (Venice, Ý) - thổi thủ công",
            "Cơ sở": "Đồng thau nguyên chất mạ chrom bóng",
            "Công suất": "18W LED tri-color RGB",
            "Độ sáng": "1200-3500 Lumen (dimming)",
            "Màu sáng": "2700K-6500K (tunable)",
            "CRI (Chỉ số hiển thị màu)": ">95 (rất tốt)",
            "Điều khiển": "Touch + Mobile App (WiFi 2.4GHz)",
            "Cảm biến": "Cảm biến ánh sáng tự động",
            "Memory": "Nhớ 4 preset màu sáng yêu thích",
            "Kích thước": "Ø360mm (mặt) x Cao 680mm",
            "Trọng lượng": "2.5kg",
            "Bảo hành": "5 năm chip, 2 năm LED",
            "Tuổi thọ LED": "50,000 giờ (tương đương 23 năm dùng 8h/ngày)",
            "Tiêu chuẩn": "CE, FCC, RoHS"
        }
    },
    {
        id: 'lamp-scholar-light',
        name: 'Đèn Để Bàn SCHOLAR LIGHT – Ánh sáng cổ điển cho bậc thầy',
        category: 'lamp',
        categoryName: 'Đèn Để Bàn',
        price: 8900000,
        badges: ['LED Eco', 'Vintage', 'Retro Design'],
        thumb: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600',
            'https://images.unsplash.com/photo-1567636192335-14c66f859066?w=1600'
        ],
        shortDesc: 'Đèn để bàn cổ điển. Tái tạo từ mẫu đèn thư viện Trinity College Dublin, vải linen vintage.',
        story: 'SCHOLAR LIGHT được lấy cảm hứng từ chiếc đèn để bàn nổi tiếng được dùng trong thư viện Trinity College Dublin, nơi James Joyce viết "Ulysses". Thiết kế retro nhưng trang bị công nghệ LED hiện đại. Bóng đèn LED vintage (filament style) tái tạo bầu không khí ấm áp như thời cổ điển. Phù hợp cho các nhà văn, nhà khoa học, hay những người yêu thích phong cách cổ điển.',
        story: 'Lấy cảm hứng từ các đèn để bàn cổ điển của các thư viện nổi tiếng, SCHOLAR LIGHT mang đến vẻ đẹp thanh lịch kết hợp với công nghệ hiện đại. Trang bị bóng LED filament vintage để tái tạo bầu không khí ấm áp.',
        specs: {
            "Thân đèn": "Đồng đỏ nguyên chất (1.5mm), phủ patina tự nhiên",
            "Loa che": "Linen 100% màu be (được dệt tại Lyon, Pháp)",
            "Bóng đèn": "LED filament vintage 2200K (Edison Style)",
            "Công suất": "8W LED (tương đương 40W hạlo cũ)",
            "Độ sáng": "600 Lumen",
            "Điều khiển": "Công tắc rotary (xoay) cơ học kiểu retro",
            "Cáp": "Vải cotton dệt tay (điều khiển cáp)",
            "Kích thước": "Ø300mm (base) x Cao 520mm",
            "Trọng lượng": "1.8kg",
            "Tiêu thụ": "< 0.5W ở chế độ standby",
            "Bảo hành": "3 năm chip LED, 1 năm bóng",
            "Tuổi thọ LED": "30,000 giờ"
        }
    },
    {
        id: 'accessory-sovereign-vip',
        name: 'Bộ Phụ Kiện SOVEREIGN – Đẳng cấp trong từng chi tiết',
        category: 'accessory',
        categoryName: 'Phụ Kiện Hoàng Gia',
        price: 12800000,
        badges: ['Luxury Set', 'Handcrafted', 'Italian Leather'],
        thumb: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600',
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600'
        ],
        shortDesc: 'Bộ 5 phụ kiện bàn văn phòng cao cấp. Da Hermès Ý, khóa bạc S925.',
        story: 'SOVEREIGN là biểu tượng của chủ quyền tuyệt đối trên mặt bàn. Mỗi món đều được chế tác thủ công bởi các thợ da tiếng tại Firenze, Italia. Bộ gồm: (1) Hộp đựng bút da vintage với khóa bạc S925, (2) Khay giấy A4 với viền đồng thau, (3) Đồng hồ bàn cơ (mechanical, lên dây tay), (4) Giá sách làm từ gỗ sồi với cân bằng bạc, (5) Đế lót chuột da. Mỗi sản phẩm đều có chứng chỉ độc lập từ các thợ thủ công.',
        specs: {
            "Chất liệu chính": "Da Hermès 100% (Taurillon) - Pháp",
            "Bộ gồm": "5 món (hộp bút, khay giấy, đồng hồ, cân bằng, đế lót)",
            "Hộp bút": "Dung tích 12 cây bút, khóa bạc S925 handmade",
            "Khay giấy": "Kích thước A4 (210x297mm), viền đồng thau",
            "Đồng hồ": "Cơ (Mechanical), lên dây tay, dây da Hermès",
            "Cân bằng": "Gỗ sồi Bắc Âu, khóa bạc S925",
            "Đế lót": "Da vintage, chống trượt, đệm cotton dưới",
            "Màu sắc": "3 tùy chọn: Đen sâu, Nâu cognac, Xám (Gris)",
            "Packaging": "Hộp gỗ tuyệt đẹp với logo khắc",
            "Chứng chỉ": "Khóa S925 được đánh dấu chứng thực",
            "Bảo hành": "3 năm sản phẩm, trọn đời sửa chữa",
            "Xuất xứ": "Handmade 100% tại Firenze, Italia",
            "Tính chất": "Sản phẩm vintage sẽ thêm đẹp theo thời gian"
        }
    },
    {
        id: 'shelf-wisdom-tower',
        name: 'Kệ Sách WISDOM TOWER – Tháp Tri Thức của bạn',
        category: 'shelf',
        categoryName: 'Kệ Sách & Trang Trí',
        price: 22000000,
        badges: ['Open Shelving', 'Modular', 'Minimalist'],
        thumb: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1600',
            'https://images.unsplash.com/photo-1516979187457-635ffe35ebdb?w=1600'
        ],
        shortDesc: 'Kệ sách mở hiện đại. 6 tầng, có thể tháo lắp, gỗ Sồi lành tính x Thép không gỉ.',
        story: 'WISDOM TOWER không chỉ là kệ để sách, mà còn là một tác phẩm nghệ thuật kiến trúc cho phòng làm việc. Thiết kế modulat cho phép bạn sắp xếp độc lập từng tầng, tháo lắp tùy ý. Gỗ Sồi tự nhiên từ Scandinavian kết hợp với thép không gỉ 304 (dùng cho tàu biển). Mỗi tầng có thể chịu tải 30kg, chứa được 100+ quyển sách. Lý tưởng cho những yêu thích minimize nhưng vẫn muốn trưng bày các công trình, sách, và trang trí cao cấp.',
        specs: {
            "Chất liệu tầng": "Gỗ Sồi (Oak) tự nhiên, certified FSC 100%",
            "Khung": "Thép không gỉ 304 (loại dùng cho tàu biển), không han rỉ",
            "Độ dày tầng": "22mm",
            "Số tầng": "6 tầng (khoảng cách giữa các tầng 280mm)",
            "Kích thước": "Rộng 1200mm x Sâu 350mm x Cao 1800mm",
            "Công suất mỗi tầng": "30kg",
            "Khoảng cách tầng": "Có thể điều chỉnh 30mm",
            "Cách lắp": "Tháo lắp không cần cưa gỗ, chỉ dùng 6 bu lông",
            "Góc mép": "Bộ làm mềm góc (radius 10mm)",
            "Chân": "Chân điều chỉnh độ cao ±10mm, chống trượt",
            "Xử lý bề mặt": "Sơn dầu Tung 100% (không hóa chất)",
            "Bảo hành": "Trọn đời khung, 5 năm tầng gỗ",
            "Chứng chỉ": "FSC 100%, CE",
            "Tuổi thọ": "30+ năm nếu bảo dưỡng đúng"
        }
    }
];

function getAllProducts() { return products; }
function getProductById(id) { return products.find(p => p.id === id); }
function getProductsByCategory(category) { return category === 'all' ? products : products.filter(p => p.category === category); }
function formatCurrency(amount) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount); }