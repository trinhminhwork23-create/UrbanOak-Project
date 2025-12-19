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
    },
    {
        id: 'cabinet-imperial-vault',
        name: 'Tủ Tài Liệu IMPERIAL VAULT – Pháo Đài Bảo Mật Hoàng Gia',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 38900000,
        badges: ['Biometric Lock', 'Fireproof', 'Swiss Engineering'],
        thumb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600',
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600'
        ],
        shortDesc: 'Tủ tài liệu cao cấp với khóa sinh trắc học. Chống cháy 2 giờ, thép Thụy Sĩ, 4 ngăn riêng biệt.',
        story: 'IMPERIAL VAULT được thiết kế theo tiêu chuẩn ngân hàng Thụy Sĩ, nơi những bí mật quan trọng nhất thế giới được bảo vệ. Thân tủ làm từ thép đặc biệt Krupp (Đức) dày 8mm, lớp cách nhiệt ceramic chống cháy 2 giờ ở 1000°C. Hệ thống khóa sinh trắc học 5 điểm: vân tay, mống mắt, mật khẩu, thẻ từ và chìa khóa cơ học backup. Bên trong được chia thành 4 ngăn độc lập với đệm velvet cao cấp, mỗi ngăn có hệ thống kiểm soát độ ẩm riêng. Được các CEO Fortune 500 tin dùng để bảo vệ tài liệu tối mật.',
        specs: {
            "Thân tủ": "Thép Krupp đặc biệt (Đức) dày 8mm, chống đạn cấp độ 3A",
            "Chống cháy": "Ceramic cách nhiệt, chịu 1000°C trong 2 giờ",
            "Hệ thống khóa": "Sinh trắc học 5 điểm (vân tay + mống mắt + mật khẩu + thẻ từ + chìa cơ)",
            "Số ngăn": "4 ngăn độc lập, mỗi ngăn 45L",
            "Đệm lót": "Velvet Alcantara Ý, chống tĩnh điện",
            "Kiểm soát độ ẩm": "4 hệ thống độc lập, duy trì 45-55% RH",
            "Kích thước": "Rộng 800mm x Sâu 600mm x Cao 1400mm",
            "Trọng lượng": "280kg (không tính tài liệu)",
            "Nguồn điện": "220V + Pin backup lithium 72h",
            "Cảnh báo": "Hệ thống báo động kết nối smartphone",
            "Chứng chỉ": "UL Class 350 (chống cháy), EN 1143-1 (chống trộm)",
            "Bảo hành": "10 năm cơ khí, 5 năm điện tử",
            "Lắp đặt": "Đội ngũ kỹ thuật chuyên nghiệp, bảo mật tuyệt đối",
            "Xuất xứ": "Thụy Sĩ (cơ khí) + Đức (thép) + Ý (nội thất)"
        }
    },
    {
        id: 'sofa-aristocrat-lounge',
        name: 'Sofa ARISTOCRAT LOUNGE – Ngai Vàng Của Quý Tộc Hiện Đại',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 52000000,
        badges: ['Italian Leather', 'Handstitched', 'Limited Edition'],
        thumb: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600',
            'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600'
        ],
        shortDesc: 'Sofa 3 chỗ ngồi cao cấp. Da bò Ý nguyên tấm, khung gỗ sồi 100 năm, may thủ công.',
        story: 'ARISTOCRAT LOUNGE là tác phẩm nghệ thuật sống, được chế tác bởi những nghệ nhân da hàng đầu tại Milano. Mỗi tấm da được tuyển chọn từ những con bò Highland Scotland, sống trong môi trường hoang dã, cho da có độ bền và mềm mại tuyệt vời. Khung gỗ sồi được lấy từ những cây 100+ tuổi ở rừng Ardennes (Bỉ), qua 18 tháng sấy khô tự nhiên. Mỗi đường chỉ khâu đều được thực hiện thủ công bằng chỉ lụa Hermès, tạo nên những đường nét hoàn hảo. Đệm sử dụng lông ngỗng Siberia kết hợp với foam memory cao cấp, mang lại cảm giác êm ái như đám mây.',
        specs: {
            "Da bọc": "Da bò Highland Scotland nguyên tấm, thuộc thực vật",
            "Khung gỗ": "Sồi Ardennes 100+ tuổi, sấy khô tự nhiên 18 tháng",
            "Chỉ khâu": "Chỉ lụa Hermès, khâu thủ công 100%",
            "Đệm ngồi": "Lông ngỗng Siberia + Memory foam 12cm",
            "Đệm tựa": "Lông vũ premium + Microfiber",
            "Chân sofa": "Gỗ sồi nguyên khối, sơn PU bóng",
            "Kích thước": "Dài 2200mm x Sâu 950mm x Cao 850mm",
            "Chiều cao ngồi": "420mm (tối ưu cho người Việt)",
            "Trọng lượng": "95kg",
            "Công suất": "3 người lớn (tối đa 300kg)",
            "Màu sắc": "5 tùy chọn: Đen Obsidian, Nâu Cognac, Xám Charcoal, Trắng Ivory, Xanh Navy",
            "Bảo dưỡng": "Kit bảo dưỡng da cao cấp đi kèm",
            "Bảo hành": "Trọn đời khung gỗ, 10 năm da, 5 năm đệm",
            "Giao hàng": "Vận chuyển bằng xe chuyên dụng, lắp đặt tận nơi",
            "Xuất xứ": "Handmade tại Milano, Italia"
        }
    },
    {
        id: 'table-conference-sovereign',
        name: 'Bàn Họp CONFERENCE SOVEREIGN – Bàn Tròn Quyền Lực',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 68000000,
        badges: ['Solid Mahogany', 'Smart Table', 'Presidential'],
        thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600'
        ],
        shortDesc: 'Bàn họp tròn 12 chỗ ngồi. Gỗ Mahogany nguyên tấm, tích hợp công nghệ thông minh.',
        story: 'CONFERENCE SOVEREIGN được lấy cảm hứng từ bàn họp của Phòng Bầu Dục Nhà Trắng. Thiết kế tròn tượng trưng cho sự bình đẳng và đoàn kết trong các cuộc thảo luận quan trọng. Mặt bàn được chế tác từ một khúc gỗ Mahogany Honduras nguyên tấm, đường kính 3.5m, tuổi đời 200+ năm. Bên trong tích hợp hệ thống âm thanh 360°, màn hình LED ẩn có thể hiện lên từ mặt bàn, 12 cổng sạc không dây và hệ thống quản lý cuộc họp thông minh. Mỗi vị trí có microphone ẩn và loa riêng biệt, đảm bảo mọi tiếng nói đều được truyền tải rõ ràng.',
        specs: {
            "Chất liệu mặt": "Gỗ Mahogany Honduras nguyên tấm, 200+ tuổi",
            "Đường kính": "3500mm (chỗ ngồi 12 người)",
            "Độ dày mặt": "80mm",
            "Chân bàn": "Thép carbon mạ vàng 24K, thiết kế trụ trung tâm",
            "Màn hình": "LED 55inch ẩn trong mặt bàn, độ phân giải 4K",
            "Âm thanh": "Hệ thống 360° Bose, 12 micro ẩn + 12 loa riêng",
            "Sạc không dây": "12 vị trí sạc Qi 15W, tương thích mọi thiết bị",
            "Điều khiển": "Tablet trung tâm + App di động",
            "Kết nối": "WiFi 6, Bluetooth 5.2, HDMI, USB-C",
            "Chiều cao": "750mm (tiêu chuẩn quốc tế)",
            "Trọng lượng": "450kg",
            "Nguồn điện": "220V + UPS backup 4 giờ",
            "Tính năng thông minh": "Ghi âm cuộc họp, phiên dịch real-time, chia sẻ màn hình",
            "Bảo hành": "Trọn đời gỗ, 5 năm công nghệ",
            "Lắp đặt": "Đội ngũ kỹ thuật chuyên nghiệp, training sử dụng",
            "Chứng chỉ": "FSC 100%, CE, FCC"
        }
    },
    {
        id: 'chair-meditation-zen',
        name: 'Ghế Thiền ZEN MEDITATION – Tĩnh Lặng Trong Tâm Hồn',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 19800000,
        badges: ['Ergonomic Zen', 'Bamboo Fiber', 'Mindfulness'],
        thumb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600',
            'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600'
        ],
        shortDesc: 'Ghế thiền cao cấp với thiết kế ergonomic. Sợi tre tự nhiên, đệm memory foam, góc ngồi tối ưu.',
        story: 'ZEN MEDITATION được thiết kế dựa trên nghiên cứu sâu về tư thế thiền của các thiền sư Nhật Bản. Khung ghế làm từ tre Moso Nhật Bản 5 năm tuổi, được xử lý theo công nghệ truyền thống Takesumi (than tre), tạo ra bề mặt kháng khuẩn tự nhiên và hấp thụ độ ẩm. Đệm ngồi sử dụng memory foam kết hợp với sợi tre tự nhiên, tạo cảm giác mát mẻ và thoáng khí. Góc ngồi được tính toán chính xác 105° để hỗ trợ tư thế thiền lý tưởng, giúp cột sống thẳng và thở sâu dễ dàng. Tích hợp hệ thống rung massage nhẹ và phát nhạc thiền qua Bluetooth.',
        specs: {
            "Khung chính": "Tre Moso Nhật Bản 5 năm tuổi, xử lý Takesumi",
            "Đệm ngồi": "Memory foam + Sợi tre tự nhiên",
            "Đệm tựa": "Gel cooling + Bamboo fiber",
            "Góc ngồi": "105° (tối ưu cho thiền định)",
            "Massage": "8 điểm rung nhẹ, 3 chế độ",
            "Âm thanh": "Loa Bluetooth ẩn, phát nhạc thiền",
            "Kích thước": "Rộng 650mm x Sâu 700mm x Cao 900mm",
            "Chiều cao ngồi": "380mm (thấp hơn ghế thường)",
            "Trọng lượng": "12kg",
            "Công suất tối đa": "120kg",
            "Pin": "Lithium 5000mAh, sử dụng 20 giờ",
            "Sạc": "USB-C, sạc đầy trong 3 giờ",
            "Tính năng": "Timer thiền, nhắc nhở tư thế, app di động",
            "Màu sắc": "Tre tự nhiên + Đệm màu be/xám/xanh lá",
            "Bảo hành": "5 năm khung tre, 2 năm điện tử",
            "Chứng chỉ": "FSC 100% (tre bền vững), CE"
        }
    },
    {
        id: 'art-sculpture-phoenix',
        name: 'Tác Phẩm Nghệ Thuật PHOENIX RISING – Phượng Hoàng Tái Sinh',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 35000000,
        badges: ['Bronze Art', 'Limited 88/Year', 'Museum Quality'],
        thumb: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600',
            'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600',
            'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1600'
        ],
        shortDesc: 'Tượng đồng Phượng Hoàng nghệ thuật. Đúc thủ công, mạ vàng 24K, chỉ 88 tác phẩm/năm.',
        story: 'PHOENIX RISING là biểu tượng của sự tái sinh và thành công vượt qua thử thách. Được tạo ra bởi nghệ sĩ điêu khắc nổi tiếng Nguyễn Minh Đức, người từng triển lãm tại Louvre. Mỗi tác phẩm được đúc thủ công từ đồng đỏ nguyên chất theo phương pháp "cire perdue" (sáp mất) truyền thống của Pháp. Bề mặt được xử lý patina tự nhiên và điểm nhấn bằng vàng 24K thật. Phượng hoàng với đôi cánh xòe rộng 80cm, thể hiện sự mạnh mẽ và uy nghiêm. Mỗi năm chỉ sản xuất 88 tác phẩm, mỗi tác phẩm đều có chứng chỉ xác thực và chữ ký của nghệ sĩ.',
        specs: {
            "Chất liệu": "Đồng đỏ nguyên chất 99.9%",
            "Kỹ thuật": "Đúc sáp mất (cire perdue) thủ công",
            "Xử lý bề mặt": "Patina tự nhiên + Mạ vàng 24K điểm nhấn",
            "Kích thước": "Cao 650mm x Rộng 800mm x Sâu 400mm",
            "Trọng lượng": "18kg",
            "Đế": "Đá granite đen Ấn Độ, khắc tên tác phẩm",
            "Nghệ sĩ": "Nguyễn Minh Đức (triển lãm Louvre 2019)",
            "Số lượng": "Limited 88 tác phẩm/năm",
            "Chứng chỉ": "Certificate of Authenticity + Chữ ký nghệ sĩ",
            "Đóng gói": "Hộp gỗ cao cấp với đệm velvet",
            "Bảo quản": "Hướng dẫn bảo quản và làm sạch đi kèm",
            "Giá trị": "Tăng giá 15-20%/năm (theo thống kê nghệ thuật)",
            "Bảo hành": "Trọn đời (chống oxy hóa)",
            "Ý nghĩa phong thủy": "Mang lại may mắn, thành công, vượt qua khó khăn",
            "Xuất xứ": "Handmade tại Việt Nam"
        }
    },
    {
        id: 'mirror-infinity-portal',
        name: 'Gương INFINITY PORTAL – Cổng Thời Gian Vô Tận',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 24500000,
        badges: ['Smart Mirror', 'LED Infinity', 'Touch Control'],
        thumb: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600'
        ],
        shortDesc: 'Gương thông minh với hiệu ứng LED vô tận. Khung nhôm hàng không, điều khiển cảm ứng.',
        story: 'INFINITY PORTAL là kết quả của 3 năm nghiên cứu về công nghệ gương thông minh tại MIT. Sử dụng công nghệ LED Infinity độc quyền, tạo ra hiệu ứng ánh sáng vô tận như một cổng thời gian. Mặt gương làm từ thủy tinh Low-Iron Pilkington (Anh), độ phản chiếu 99.1%, không bị biến dạng. Khung nhôm hàng không 6061-T6 cùng loại dùng cho tàu vũ trụ. Tích hợp cảm biến chuyển động, tự động sáng khi có người đến gần. Có chế độ ánh sáng trị liệu (Light Therapy) giúp cải thiện tâm trạng và giấc ngủ.',
        specs: {
            "Mặt gương": "Thủy tinh Low-Iron Pilkington (Anh), độ phản chiếu 99.1%",
            "Khung": "Nhôm hàng không 6061-T6, sơn anodized màu đen",
            "Công nghệ LED": "Infinity Loop, 360 LED RGB + 120 LED trắng",
            "Hiệu ứng": "Vô tận (Infinity), 12 chế độ ánh sáng",
            "Điều khiển": "Cảm ứng chạm + App di động + Voice Control",
            "Cảm biến": "PIR Motion Sensor, tự động bật/tắt",
            "Kích thước": "Đường kính 800mm x Dày 45mm",
            "Trọng lượng": "8.5kg",
            "Công suất": "25W LED (tiết kiệm 80% so với đèn truyền thống)",
            "Tính năng đặc biệt": "Light Therapy (trị liệu ánh sáng), Anti-fog",
            "Lắp đặt": "Treo tường hoặc đặt bàn (kèm giá đỡ)",
            "Bảo hành": "5 năm LED, 3 năm cảm biến",
            "Chứng chỉ": "CE, FCC, IP44 (chống nước)",
            "Xuất xứ": "Thiết kế MIT (Mỹ) + Sản xuất Đức"
        }
    },
    {
        id: 'plant-stand-eden-tower',
        name: 'Giá Cây EDEN TOWER – Vườn Trên Không Trung',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 16800000,
        badges: ['Vertical Garden', 'Auto Watering', 'Modular'],
        thumb: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1600',
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600',
            'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1600'
        ],
        shortDesc: 'Hệ thống vườn thẳng đứng thông minh. Tưới nước tự động, 5 tầng modular.',
        story: 'EDEN TOWER được phát triển dựa trên nghiên cứu của NASA về trồng trọt trong không gian. Hệ thống Vertical Farming cho phép trồng 25 cây trong diện tích chỉ 1m2. Khung làm từ tre Moso xử lý nhiệt độ cao, chống mối mọt và côn trùng. Hệ thống tưới nhỏ giọt thông minh với 15 đầu phụn, tự động điều chỉnh lượng nước theo từng loại cây. Tích hợp cảm biến độ ẩm đất và ánh sáng, kết nối app di động để theo dõi sức khỏe cây cảnh. Mỗi tầng có thể thiết kế riêng biệt cho các loại cây khác nhau.',
        specs: {
            "Khung chính": "Tre Moso xử lý nhiệt, chống mối mọt 15 năm",
            "Số tầng": "5 tầng modular, có thể thêm/bớt",
            "Dung tích": "25 chậu cây (5 chậu/tầng)",
            "Hệ thống tưới": "Drip irrigation, 15 đầu phụn điều chỉnh",
            "Bể chứa nước": "20L, ẩn bên trong, có đồng hồ báo mực",
            "Cảm biến": "Độ ẩm đất (5 điểm) + Ánh sáng + Nhiệt độ",
            "Kích thước": "Rộng 600mm x Sâu 600mm x Cao 1800mm",
            "Trọng lượng": "25kg (không tính cây và đất)",
            "Nguồn điện": "12V DC, adapter 220V, tiêu thụ 5W",
            "Điều khiển": "App di động (iOS/Android) + Timer tự động",
            "Chậu cây": "Ceramic cao cấp, 25 chậu đi kèm",
            "Phụ kiện": "Bộ dụng cụ chăm sóc cây + Hướng dẫn",
            "Bảo hành": "5 năm khung tre, 2 năm hệ thống điện",
            "Thích hợp": "Cây cảnh trong nhà, thảo mộc, hoa nhỏ",
            "Xuất xứ": "Thiết kế Singapore + Lắp ráp Việt Nam"
        }
    },
    {
        id: 'wine-cellar-bordeaux-vault',
        name: 'Tủ Rượu BORDEAUX VAULT – Hầm Rượu Hoàng Gia',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 89000000,
        badges: ['Climate Control', 'Handcrafted', 'French Oak'],
        thumb: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600',
            'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1600',
            'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1600'
        ],
        shortDesc: 'Tủ rượu điều hòa khí hậu chuyên nghiệp. Gỗ sồi Pháp, chứa 200 chai, cửa kính 3 lớp.',
        story: 'BORDEAUX VAULT được chế tác bởi những thợ mộc truyền thống tại vùng Bordeaux, Pháp - nơi sinh ra những chai rượu đắt giá nhất thế giới. Sử dụng gỗ sồi Pháp (French Oak) 80+ năm tuổi từ rừng Vosges, cùng loại dùng để làm thùng ươm rượu Bordeaux hạng sang. Hệ thống điều hòa khí hậu Liebherr (Đức) duy trì nhiệt độ 12-18°C và độ ẩm 60-70%, lý tưởng cho bảo quản rượu vang. Cửa kính 3 lớp chống tia UV, bảo vệ rượu khỏi ánh sáng. Bên trong có hệ thống giá trượt trơn tru, dễ dàng lấy rượu mà không làm rùng động các chai khác. Được các nhà sưu tập rượu chuyên nghiệp tin dùng.',
        specs: {
            "Chất liệu": "Gỗ sồi Pháp (French Oak) 80+ năm tuổi, rừng Vosges",
            "Dung tích": "200 chai rượu vang chuẩn (750ml)",
            "Hệ thống lạnh": "Liebherr WineGuard Pro (Đức)",
            "Nhiệt độ": "12-18°C (điều chỉnh chính xác ±1°C)",
            "Độ ẩm": "60-70% RH (tự động duy trì)",
            "Cửa kính": "3 lớp, chống tia UV 99.9%, Low-E coating",
            "Giá đỡ": "12 tầng trượt trơn tru, gỗ sồi nguyên khối",
            "Kích thước": "Rộng 800mm x Sâu 700mm x Cao 1900mm",
            "Trọng lượng": "180kg (không tính rượu)",
            "Công suất": "150W (tiết kiệm năng lượng A+++)",
            "Đèn LED": "Warm White 2700K, không phát nhiệt",
            "Bảo vệ": "Khóa điện tử + Cảnh báo chuyển động",
            "Màn hình": "LCD hiển thị nhiệt độ, độ ẩm, cảnh báo",
            "Bảo hành": "10 năm gỗ, 5 năm hệ thống lạnh",
            "Lắp đặt": "Miễn phí + Hướng dẫn sử dụng",
            "Xuất xứ": "Handmade tại Bordeaux, Pháp"
        }
    },
    {
        id: 'chair-executive-platinum',
        name: 'Ghế Giám Đốc EXECUTIVE PLATINUM – Đỉnh Cao Quyền Lực',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 32500000,
        badges: ['Platinum Edition', 'Italian Leather', 'Massage'],
        thumb: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600'
        ],
        shortDesc: 'Ghế giám đốc cao cấp nhất với da Ý, massage 8 điểm, khung titan.',
        story: 'EXECUTIVE PLATINUM là đỉnh cao của dòng ghế lãnh đạo. Được chế tác từ da bò Ý cao cấp nhất, tích hợp hệ thống massage 8 điểm và sưởi ấm. Khung titan siêu nhẹ nhưng cực kỳ bền bỉ.',
        specs: {
            "Chất liệu": "Da bò Ý Nappa + Khung Titan",
            "Massage": "8 điểm massage + Sưởi ấm",
            "Kích thước": "800x850x1300mm",
            "Trọng lượng": "28kg",
            "Bảo hành": "15 năm"
        }
    },
    {
        id: 'chair-ergonomic-master',
        name: 'Ghế Ergonomic MASTER – Bậc Thầy Công Thái Học',
        category: 'chair',
        categoryName: 'Ghế Văn Phòng',
        price: 18900000,
        badges: ['Ergonomic Pro', 'German Design', 'Health+'],
        thumb: 'https://images.unsplash.com/photo-1598300056681-f8e0f05a9a99?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1598300056681-f8e0f05a9a99?w=1600'
        ],
        shortDesc: 'Ghế ergonomic Đức với 15 điểm điều chỉnh, bảo vệ cột sống tối ưu.',
        story: 'MASTER được thiết kế bởi các chuyên gia ergonomic hàng đầu Đức. 15 điểm điều chỉnh độc lập giúp tạo ra tư thế ngồi hoàn hảo cho từng người dùng.',
        specs: {
            "Điều chỉnh": "15 điểm độc lập",
            "Lưới": "3D Mesh Đức",
            "Đệm": "Memory foam cao cấp",
            "Chứng chỉ": "TÜV Rheinland",
            "Bảo hành": "8 năm"
        }
    },
    {
        id: 'chair-gaming-titan',
        name: 'Ghế Gaming TITAN – Chiến Binh Không Gian',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 24800000,
        badges: ['Gaming Pro', 'RGB Lighting', '4D Armrest'],
        thumb: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=1600'
        ],
        shortDesc: 'Ghế gaming cao cấp với đèn LED RGB, âm thanh surround tích hợp.',
        story: 'TITAN được thiết kế cho các CEO yêu thích công nghệ. Tích hợp đèn LED RGB đồng bộ, loa surround và sạc không dây. Phong cách tương lai trong văn phòng hiện đại.',
        specs: {
            "LED": "RGB 16 triệu màu",
            "Âm thanh": "Surround 5.1",
            "Sạc": "Wireless charging pad",
            "Tay vịn": "4D + LED",
            "Bảo hành": "5 năm"
        }
    },
    {
        id: 'chair-vintage-royal',
        name: 'Ghế Cổ Điển VINTAGE ROYAL – Hoàng Gia Thế Kỷ 19',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 45000000,
        badges: ['Antique Style', 'Handcarved', 'Limited 25/Year'],
        thumb: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600'
        ],
        shortDesc: 'Ghế cổ điển tái hiện phong cách hoàng gia, chạm khắc thủ công.',
        story: 'VINTAGE ROYAL tái hiện vẻ đẹp của ghế hoàng gia thế kỷ 19. Mỗi chi tiết đều được chạm khắc thủ công bởi nghệ nhân lành nghề. Chỉ sản xuất 25 chiếc mỗi năm.',
        specs: {
            "Gỗ": "Mahogany 150+ năm tuổi",
            "Chạm khắc": "100% thủ công",
            "Da": "Da bò Cordovan",
            "Sản lượng": "25 chiếc/năm",
            "Bảo hành": "Trọn đời"
        }
    },
    {
        id: 'desk-imperial-command',
        name: 'Bàn Chỉ Huy IMPERIAL COMMAND – Trung Tâm Quyền Lực',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 58000000,
        badges: ['Smart Desk', 'Bulletproof Glass', 'Command Center'],
        thumb: 'https://images.unsplash.com/photo-1593642632623-8f785e4fb5b0?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1593642632623-8f785e4fb5b0?w=1600'
        ],
        shortDesc: 'Bàn thông minh với mặt kính chống đạn, hệ thống điều khiển tích hợp.',
        story: 'IMPERIAL COMMAND là trung tâm chỉ huy hiện đại. Mặt bàn kính chống đạn tích hợp màn hình cảm ứng, điều khiển toàn bộ hệ thống văn phòng thông minh.',
        specs: {
            "Mặt bàn": "Kính chống đạn 20mm",
            "Màn hình": "55inch cảm ứng tích hợp",
            "Điều khiển": "Smart office system",
            "Kích thước": "2500x1200x750mm",
            "Bảo hành": "10 năm"
        }
    },
    {
        id: 'desk-minimalist-zen',
        name: 'Bàn Tối Giản ZEN MINIMALIST – Thiền Trong Công Việc',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 22000000,
        badges: ['Minimalist', 'Bamboo', 'Zen Design'],
        thumb: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600'
        ],
        shortDesc: 'Bàn tre tối giản theo triết lý Zen, mang lại sự tĩnh lặng cho tâm hồn.',
        story: 'ZEN MINIMALIST thể hiện triết lý "ít là nhiều". Được làm từ tre già 7 năm, thiết kế tối giản giúp tập trung tuyệt đối vào công việc.',
        specs: {
            "Chất liệu": "Tre Moso 7 năm tuổi",
            "Thiết kế": "Minimalist Nhật Bản",
            "Kích thước": "1800x800x720mm",
            "Trọng lượng": "35kg",
            "Bảo hành": "7 năm"
        }
    },
    {
        id: 'desk-standing-dynamic',
        name: 'Bàn Đứng DYNAMIC STANDING – Năng Động Mọi Lúc',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 35000000,
        badges: ['Standing Desk', 'Electric Motor', 'Health Tech'],
        thumb: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1600'
        ],
        shortDesc: 'Bàn đứng thông minh với motor điện, theo dõi sức khỏe tích hợp.',
        story: 'DYNAMIC STANDING cách mạng hóa cách làm việc. Tự động điều chỉnh độ cao, nhắc nhở đứng ngồi, theo dõi calories tiêu thụ. Sức khỏe là ưu tiên hàng đầu.',
        specs: {
            "Điều chỉnh": "Điện tử 650-1300mm",
            "Theo dõi": "Health monitoring",
            "App": "iOS/Android control",
            "Tải trọng": "150kg",
            "Bảo hành": "8 năm"
        }
    },
    {
        id: 'desk-crystal-luxury',
        name: 'Bàn Pha Lê CRYSTAL LUXURY – Nghệ Thuật Trong Suốt',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 72000000,
        badges: ['Crystal Glass', 'Luxury Art', 'Handmade'],
        thumb: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1600'
        ],
        shortDesc: 'Bàn pha lê nghệ thuật, mỗi chiếc là tác phẩm độc nhất vô nhị.',
        story: 'CRYSTAL LUXURY là tác phẩm nghệ thuật sống. Mặt bàn pha lê Bohemia dày 50mm được thổi và cắt thủ công. Ánh sáng khúc xạ tạo nên vẻ đẹp huyền ảo.',
        specs: {
            "Pha lê": "Bohemia Crystal 50mm",
            "Chân": "Thép mạ vàng 24K",
            "Thủ công": "100% handmade",
            "Kích thước": "2000x1000x750mm",
            "Bảo hành": "Trọn đời"
        }
    },
    {
        id: 'lamp-aurora-premium',
        name: 'Đèn AURORA PREMIUM – Cực Quang Cao Cấp',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 28500000,
        badges: ['Premium Aurora', 'Voice Control', 'Mood Lighting'],
        thumb: 'https://images.unsplash.com/photo-1565636192335-14c66f859066?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1565636192335-14c66f859066?w=1600'
        ],
        shortDesc: 'Đèn cao cấp với hiệu ứng cực quang, điều khiển giọng nói AI.',
        story: 'AURORA PREMIUM nâng cấp từ phiên bản gốc với AI tích hợp. Hiểu được tâm trạng qua giọng nói và tự động điều chỉnh ánh sáng phù hợp.',
        specs: {
            "AI": "Voice recognition",
            "Hiệu ứng": "Aurora simulation",
            "Điều khiển": "Voice + App + Gesture",
            "Công suất": "25W LED",
            "Bảo hành": "7 năm"
        }
    },
    {
        id: 'lamp-crystal-chandelier',
        name: 'Đèn Chùm CRYSTAL CHANDELIER – Hoàng Gia Pha Lê',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 85000000,
        badges: ['Swarovski Crystal', 'Handcrafted', 'Palace Style'],
        thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600'
        ],
        shortDesc: 'Đèn chùm pha lê Swarovski, tái hiện vẻ đẹp cung điện hoàng gia.',
        story: 'CRYSTAL CHANDELIER sử dụng 2,847 viên pha lê Swarovski được cắt thủ công. Mỗi viên pha lê phản chiếu ánh sáng tạo nên hiệu ứng cầu vồng tuyệt đẹp.',
        specs: {
            "Pha lê": "2,847 viên Swarovski",
            "Khung": "Đồng thau mạ vàng",
            "Đường kính": "1200mm",
            "Chiều cao": "800mm",
            "Bảo hành": "15 năm"
        }
    },
    {
        id: 'accessory-executive-set-platinum',
        name: 'Bộ Phụ Kiện EXECUTIVE PLATINUM – Đẳng Cấp Tối Thượng',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 38000000,
        badges: ['Platinum Set', 'Swiss Made', '18K Gold'],
        thumb: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600'
        ],
        shortDesc: 'Bộ phụ kiện cao cấp nhất với vàng 18K, chế tác Thụy Sĩ.',
        story: 'EXECUTIVE PLATINUM là đỉnh cao của nghệ thuật chế tác phụ kiện. Mỗi món đều được làm thủ công tại Thụy Sĩ với vàng 18K và kim cương tự nhiên.',
        specs: {
            "Vàng": "18K Swiss gold",
            "Kim cương": "Natural diamonds",
            "Bộ gồm": "12 món cao cấp",
            "Chế tác": "Swiss handmade",
            "Bảo hành": "Trọn đời"
        }
    },
    {
        id: 'accessory-smart-organizer',
        name: 'Hệ Thống SMART ORGANIZER – Tổ Chức Thông Minh',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 15800000,
        badges: ['Smart Tech', 'Auto Sort', 'AI Powered'],
        thumb: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600'
        ],
        shortDesc: 'Hệ thống tổ chức thông minh với AI, tự động sắp xếp đồ dùng.',
        story: 'SMART ORGANIZER sử dụng AI để học thói quen sử dụng và tự động sắp xếp đồ dùng văn phòng. Tích hợp cảm biến và robot mini để duy trì trật tự.',
        specs: {
            "AI": "Machine learning",
            "Cảm biến": "Multi-sensor array",
            "Robot": "Mini organizing bots",
            "App": "Smart control",
            "Bảo hành": "5 năm"
        }
    },
    {
        id: 'shelf-library-imperial',
        name: 'Thư Viện LIBRARY IMPERIAL – Cung Điện Tri Thức',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 95000000,
        badges: ['Library System', 'Mahogany Wood', 'Ladder Included'],
        thumb: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1600'
        ],
        shortDesc: 'Hệ thống thư viện hoàng gia với thang trượt, chứa 2000+ cuốn sách.',
        story: 'LIBRARY IMPERIAL tái hiện thư viện cung điện với hệ thống kệ cao 4m, thang trượt đồng thau và hệ thống phân loại tự động. Không gian tri thức đẳng cấp.',
        specs: {
            "Chiều cao": "4000mm",
            "Dung tích": "2000+ sách",
            "Thang trượt": "Đồng thau cổ điển",
            "Phân loại": "Auto cataloging",
            "Bảo hành": "20 năm"
        }
    },
    {
        id: 'shelf-display-museum',
        name: 'Tủ Trưng Bày MUSEUM DISPLAY – Bảo Tàng Cá Nhân',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 42000000,
        badges: ['Museum Quality', 'Climate Control', 'Security System'],
        thumb: 'https://images.unsplash.com/photo-1516979187457-635ffe35ebdb?w=800&q=100',
        gallery: [
            'https://images.unsplash.com/photo-1516979187457-635ffe35ebdb?w=1600'
        ],
        shortDesc: 'Tủ trưng bày chuẩn bảo tàng với kiểm soát khí hậu và bảo mật.',
        story: 'MUSEUM DISPLAY được thiết kế theo tiêu chuẩn bảo tàng quốc tế. Kiểm soát nhiệt độ, độ ẩm, ánh sáng UV và hệ thống bảo mật để bảo vệ những vật phẩm quý giá.',
        specs: {
            "Kiểm soát khí hậu": "Museum standard",
            "Bảo mật": "Biometric + Alarm",
            "Kính": "UV protection",
            "Đèn LED": "Museum lighting",
            "Bảo hành": "12 năm"
        }
    }
];

function getAllProducts() { return products; }
function getProductById(id) { return products.find(p => p.id === id); }
function getProductsByCategory(category) { return category === 'all' ? products : products.filter(p => p.category === category); }
function formatCurrency(amount) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount); }