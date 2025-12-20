const products = [
    {
        id: 'chair-winston-vip',
        name: 'Ghế Giám Đốc WINSTON ',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 28900000,
        badges: ['Best Seller', 'Da Nappa', 'Italia'],
        thumb: 'https://noithatphamhoang.com/wp-content/uploads/2024/01/RC10109-U1.jpg?w=800&q=100',
        gallery: [
            'https://noithatphamhoang.com/wp-content/uploads/2024/01/RC10109-U1.jpg?w=1600',
            'https://noithatphamhoang.com/wp-content/uploads/2024/01/RC10109-U1-3-1.jpg?w=1600',
            'https://noithatphamhoang.com/wp-content/uploads/2024/01/RC10109-U1-6.jpg?w=1600',
            'https://noithatphamhoang.com/wp-content/uploads/2024/01/RC10109-U1-4-1.jpg?w=1600',
        ],
        shortDesc: 'Ghế lãnh đạo cao cấp. Da Nappa Ý nhập khẩu, cơ chế điều chỉnh 4D.',
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
        name: 'Ghế Văn Phòng LUMINA PRO',
        category: 'chair',
        categoryName: 'Ghế Văn Phòng',
        price: 5500000,
        badges: ['Ergonomic', 'ISO9001', 'CE Certified'],
        thumb: 'https://flexhouse.vn/wp-content/uploads/2023/03/Ghe-da-ngoi-van-phong-cao-cap-ZA7793-5.jpg?w=800&q=100',
        gallery: [
            'https://flexhouse.vn/wp-content/uploads/2023/03/Ghe-da-ngoi-van-phong-cao-cap-ZA7793-9.jpg?w=1600',
            'https://flexhouse.vn/wp-content/uploads/2023/03/Ghe-da-ngoi-van-phong-cao-cap-ZA7793-10.jpg?w=1600',
            'https://flexhouse.vn/wp-content/uploads/2023/03/Ghe-da-ngoi-van-phong-cao-cap-ZA7793-5.jpg?w=1600'
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
        name: 'Bàn Giám Đốc CONCORDE ',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 45000000,
        badges: ['Gỗ Nguyên Tấm', 'Limited 10/Year', 'Kiểm định Wood'],
        thumb: 'https://kaguyasuau.com/cdn/shop/files/1_9fe24d75-ae0f-444e-b62f-488e16575963.png?crop=center&height=1600&v=1751334103&width=1600?w=800&q=100',
        gallery: [
            'https://kaguyasuau.com/cdn/shop/files/1_9fe24d75-ae0f-444e-b62f-488e16575963.png?crop=center&height=1600&v=1751334103&width=1600w=1600',
            'https://kaguyasuau.com/cdn/shop/files/2_d15587d3-43e0-483d-8d24-105ea87b9123.jpg?crop=center&height=1600&v=1751334103&width=1600?w=1600',
            'https://kaguyasuau.com/cdn/shop/files/7_20697372-086d-4488-b4a4-fb72fe07da16.jpg?crop=center&height=1600&v=1751334103&width=1600?w=1600'
        ],
        shortDesc: 'Bàn gỗ Walnut nguyên tấm 10 năm tuổi, khung thép mạ vàng. Limited Edition chỉ 50 chiếc/năm.',
        story: 'CONCORDE là tuyên ngôn của quyền lực. Mỗi tấm gỗ Walnut được tuyển chọn thủ công từ các cánh rừng Alabama (USA) độ 10+ năm tuổi. Mặt bàn được chế biến trong 6 tháng: sơn, mài, xử lý UV, bên dưới có lớp cách nhiệt từ Đức. Khung thép được rèn từ những cây thép tận dụng từ chiếc máy bay siêu tốc Concorde cũ (huyền thoại), mạ vàng 24K bằng tay. Mỗi chiếc bàn đều có chứng chỉ độc lập từ các chuyên gia gỗ.',
        specs: {
            "Loại gỗ": "Walnut đen (Black Walnut), 10 tuổi",
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
        name: 'Bàn Giám Đốc EXECUTIVE SLIM ',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 28500000,
        badges: ['Modern', 'Modular', 'Scandinavian'],
        thumb: 'https://s.alicdn.com/@sc04/kf/Hafef2676b92c4b68be7745fd8b03b525f.jpg?avif=close&webp=clos?w=800&q=100',
        gallery: [
            'https://s.alicdn.com/@sc04/kf/Hafef2676b92c4b68be7745fd8b03b525f.jpg?avif=close&webp=close?w=1600',
            'https://s.alicdn.com/@sc04/kf/H4f8dc9dbbba844bea374f3c33b654f82o.jpg?avif=close&webp=close?w=1600',
            'https://s.alicdn.com/@sc04/kf/He0db9c81f0e044a9a51d0e6832905a01G.jpg?avif=close&webp=close?w=1600'
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
        name: 'Đèn Bàn AURORA ',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 18500000,
        badges: ['Smart IoT', 'Handmade', 'Murano Glass'],
        thumb: 'https://magnific.in/wp-content/uploads/2024/08/MTL-027-1.webp?w=800&q=100',
        gallery: [
            'https://magnific.in/wp-content/uploads/2024/08/MTL-027-1.webp?w=1600',
            'https://magnific.in/wp-content/uploads/2024/08/MTL-027-5.webp?w=1600',
            'https://magnific.in/wp-content/uploads/2024/08/MTL-027-3.webp?w=1600'
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
        name: 'Đèn Để Bàn SCHOLAR LIGHT',
        category: 'lamp',
        categoryName: 'Đèn Để Bàn',
        price: 8900000,
        badges: ['LED Eco', 'Vintage', 'Retro Design'],
        thumb: 'https://den379.com/wp-content/uploads/2020/01/3-den-ban-1-1.jpg?w=800&q=100',
        gallery: [
            'https://den379.com/wp-content/uploads/2020/01/3-den-ban-1-1.jpg?w=1600',
        ],
        shortDesc: 'Đèn để bàn cổ điển. Tái tạo từ mẫu đèn thư viện Trinity College Dublin.',
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
        id: 'shelf-wisdom-tower',
        name: 'Kệ Sách WISDOM TOWER ',
        category: 'shelf',
        categoryName: 'Kệ Sách & Trang Trí',
        price: 22000000,
        badges: ['Open Shelving', 'Modular', 'Minimalist'],
        thumb: 'https://xuongdeco.com/wp-content/uploads/2020/09/Tu-trang-tri-deco-dttk52-768x768.jpg?w=800&q=100',
        gallery: [
            'https://xuongdeco.com/wp-content/uploads/2020/09/Tu-trang-tri-deco-dttk52-768x768.jpg?w=1600',
            'https://xuongdeco.com/wp-content/uploads/2020/09/Tu-trang-tri-deco-dttk52-2-768x586.jpg?w=1600'
        ],
        shortDesc: 'Kệ sách mở hiện đại, có thể tháo lắp, gỗ Sồi lành tính x Thép không gỉ.',
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
        name: 'Tủ Tài Liệu IMPERIAL VAULT ',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 38900000,
        badges: ['Biometric Lock', 'Fireproof', 'Swiss Engineering'],
        thumb: 'https://bizweb.dktcdn.net/thumb/large/100/419/787/products/tu-ho-so-phong-giam-doc-1.jpg?v=1743045384883?auto=format&fit=crop&w=800&q=80',
        gallery: [
             'https://bizweb.dktcdn.net/thumb/large/100/419/787/products/tu-ho-so-phong-giam-doc-1.jpg?v=1743045384883?auto=format&fit=crop&w=1600',
           
        ],
        shortDesc: 'Tủ tài liệu cao cấp . Chống cháy 2 giờ, thép Thụy Sĩ,.',
        story: 'IMPERIAL VAULT được thiết kế theo tiêu chuẩn ngân hàng Thụy Sĩ, nơi những bí mật quan trọng nhất thế giới được bảo vệ. Thân tủ làm từ thép đặc biệt Krupp (Đức) dày 8mm, lớp cách nhiệt ceramic chống cháy 2 giờ ở 1000°C. Hệ thống khóa sinh trắc học 3 điểm: vân tay, mật khẩu và chìa khóa cơ học backup. Bên trong được chia thành 4 ngăn độc lập với đệm velvet cao cấp, mỗi ngăn có hệ thống kiểm soát độ ẩm riêng. Được các CEO Fortune 500 tin dùng để bảo vệ tài liệu tối mật.',
        specs: {
            "Thân tủ": "Thép Krupp đặc biệt (Đức) dày 8mm, chống đạn cấp độ 3A",
            "Chống cháy": "Ceramic cách nhiệt, chịu 1000°C trong 2 giờ",
            "Hệ thống khóa": "Sinh trắc học 3 điểm (vân tay + mật khẩu + chìa cơ)",
            "Số ngăn": "4 ngăn độc lập, mỗi ngăn 45L",
            "Đệm lót": "Velvet Alcantara Ý, chống tĩnh điện",
            "Kiểm soát độ ẩm": "4 hệ thống độc lập, duy trì 45-55% RH",
            "Kích thước": "Rộng 800mm x Sâu 600mm x Cao 1400mm",
            "Trọng lượng": "280kg (không tính tài liệu)",
            "Nguồn điện": "220V + Pin backup lithium 72h",
            "Chứng chỉ": "UL Class 350 (chống cháy), EN 1143-1 (chống trộm)",
            "Bảo hành": "10 năm cơ khí, 5 năm điện tử",
            "Lắp đặt": "Đội ngũ kỹ thuật chuyên nghiệp, bảo mật tuyệt đối",
            "Xuất xứ": "Thụy Sĩ (cơ khí) + Đức (thép) + Ý (nội thất)"
        }
    },
    {
        id: 'sofa-aristocrat-lounge',
        name: 'Sofa ARISTOCRAT LOUNGE ',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 52000000,
        badges: ['Italian Leather', 'Handstitched', 'Limited Edition'],
        thumb: 'https://kenzaluxury.vn/wp-content/uploads/2022/03/Prato-03-1.png?w=800&q=100',
        gallery: [
            'https://kenzaluxury.vn/wp-content/uploads/2022/03/Prato-03-1.png?w=1600',
            'https://hnsofa.com/wp-content/uploads/2023/01/Sofa-vang-da-bo-Y-HNS88.jpg?w=1600',
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
        name: 'Bàn Họp CONFERENCE SOVEREIGN ',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 68000000,
        badges: ['Solid Mahogany', 'Smart Table', 'Presidential'],
        thumb: 'https://toanmanh.com/image/data/BH12.png?w=800&q=100',
        gallery: [
            'https://toanmanh.com/image/data/BH12.png?w=1600',
        ],
        shortDesc: 'Bàn họp chữ nhật 16 chỗ ngồi. Gỗ Mahogany nguyên tấm, tích hợp công nghệ thông minh.',
        story: 'CONFERENCE SOVEREIGN được lấy cảm hứng từ bàn họp của Phòng Bầu Dục Nhà Trắng. Thiết kế chữ nhật tượng trưng cho sự bình đẳng và đoàn kết trong các cuộc thảo luận quan trọng. Mặt bàn được chế tác từ một khúc gỗ Mahogany Honduras nguyên tấm, đường kính 3.5m, tuổi đời 200+ năm. Bên trong tích hợp hệ thống âm thanh 360°, màn hình LED ẩn có thể hiện lên từ mặt bàn, 12 cổng sạc không dây và hệ thống quản lý cuộc họp thông minh. Mỗi vị trí có microphone ẩn và loa riêng biệt, đảm bảo mọi tiếng nói đều được truyền tải rõ ràng.',
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
        id: 'art-sculpture-phoenix',
        name: 'Tác Phẩm Nghệ Thuật PHOENIX RISING ',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 35000000,
        badges: ['Bronze Art', 'Limited 88/Year', 'Museum Quality'],
        thumb: 'https://m.media-amazon.com/images/I/817ZW0NmDdL._AC_SX679_.jpg?w=800&q=100',
        gallery: [
            'https://m.media-amazon.com/images/I/817ZW0NmDdL._AC_SX679_.jpg?w=1600',
        ],
        shortDesc: 'Tượng đồng Phượng Hoàng nghệ thuật. Đúc thủ công, chỉ 88 tác phẩm/năm.',
        story: 'PHOENIX RISING là biểu tượng của sự tái sinh và thành công vượt qua thử thách. Được tạo ra bởi nghệ sĩ điêu khắc nổi tiếng Nguyễn Minh Đức, người từng triển lãm tại Louvre. Mỗi tác phẩm được đúc thủ công từ đồng đỏ nguyên chất theo phương pháp "cire perdue" (sáp mất) truyền thống của Pháp. Bề mặt được xử lý patina tự nhiên và điểm nhấn bằng vàng 24K thật. Phượng hoàng với đôi cánh xòe rộng 80cm, thể hiện sự mạnh mẽ và uy nghiêm. Mỗi năm chỉ sản xuất 88 tác phẩm, mỗi tác phẩm đều có chứng chỉ xác thực và chữ ký của nghệ sĩ.',
        specs: {
            "Chất liệu": "Đồng đỏ nguyên chất 99.9%",
            "Kỹ thuật": "Đúc sáp mất (cire perdue) thủ công",
            "Xử lý bề mặt": "Patina tự nhiên điểm nhấn",
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
            "Xuất xứ": "Handmade tại Phần Lan"
        }
    },
    {
        id: 'mirror-infinity-portal',
        name: 'Gương MARIA PORTAL ',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 24500000,
        badges: ['Smart Mirror', 'Touch Control'],
        thumb: 'https://flexdecor.vn/wp-content/uploads/2022/11/guong-trang-tri-tron-phong-cach-chau-au-co-dien-yca2836-3.jpg?w=800&q=100',
        gallery: [
            'https://flexdecor.vn/wp-content/uploads/2022/11/guong-trang-tri-tron-phong-cach-chau-au-co-dien-yca2836-3.jpg?w=1600',
        ],
        shortDesc: 'Gương phong cách châu âu tinh tế, lịch thiệp . Khung nhôm hàng không.',
        story: 'MARIA PORTAL là kết quả của 30 năm nghiên cứu về gương, tạo ra sự thanh lịch quý phái. Gương như phản chiếu được tinh thần của người sử dụng',
        specs: {
            "Mặt gương": "Thủy tinh Low-Iron Pilkington (Anh), độ phản chiếu 99.1%",
            "Khung": "Nhôm hàng không 6061-T6, sơn anodized màu đen",
            "Kích thước": "Đường kính 800mm x Dày 45mm",
            "Trọng lượng": "8.5kg",
            "Công suất": "25W LED (tiết kiệm 80% so với đèn truyền thống)",
            "Tính năng đặc biệt": "Light Therapy (trị liệu ánh sáng), Anti-fog",
            "Lắp đặt": "Treo tường hoặc đặt bàn (kèm giá đỡ)",
            "Bảo hành": "5 năm",
            "Chứng chỉ": "CE, FCC, IP44 (chống nước)",
            "Xuất xứ": "Thiết kế MIT (Mỹ) + Sản xuất Đức"
        }
    },
    {
        id: 'wine-cellar-bordeaux-vault',
        name: 'Tủ Rượu BORDEAUX VAULT ',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 89000000,
        badges: ['Climate Control', 'Handcrafted', 'French Oak'],
        thumb: 'https://smlife.vn/wp-content/uploads/2023/12/Tu-ruou-kinh-cuong-luc-dep-sang-trong-Graham.webp?w=800&q=100',
        gallery: [
            'https://smlife.vn/wp-content/uploads/2023/12/Tu-ruou-kinh-cuong-luc-dep-sang-trong-Graham.webp?w=1600',
            'https://smlife.vn/wp-content/uploads/2023/12/Tu-ruou-kinh-cuong-luc-dep-sang-trong-Graham-4-768x768.webp?w=1600',
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
        price: 12500000,
        badges: ['Platinum Edition', 'Italian Leather', 'Massage'],
        thumb: 'https://noithatlamkinh.com/wp-content/uploads/2024/06/3-15-768x768.webp?w=800&q=100',
        gallery: [
            'https://noithatlamkinh.com/wp-content/uploads/2024/06/3-15-768x768.webp?w=1600',
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
        name: 'Ghế Ergonomic MASTER ',
        category: 'chair',
        categoryName: 'Ghế Văn Phòng',
        price: 18900000,
        badges: ['Ergonomic Pro', 'German Design', 'Health+'],
        thumb: 'https://ergolife.vn/image/catalog/Gioithieu/M57-4.jpg?w=800&q=100',
        gallery: [
            'https://ergolife.vn/image/catalog/Gioithieu/M57-4.jpg?w=1600'
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
        name: 'Ghế Gaming TITAN ',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 24800000,
        badges: ['Gaming Pro', 'RGB Lighting', '4D Armrest'],
        thumb: 'https://owlgaming.vn/wp-content/uploads/2021/09/ghe-gaming-noblechairs-hero-pu-series-black-white.jpg?w=800&q=100',
        gallery: [
            'https://owlgaming.vn/wp-content/uploads/2021/09/ghe-gaming-noblechairs-hero-pu-series-black-white.jpg?w=1600'
        ],
        shortDesc: 'Ghế gaming cao cấp công thái học.',
        story: 'TITAN được thiết kế cho các CEO yêu thích công nghệ. Phong cách tương lai trong văn phòng hiện đại.',
        specs: {
            "Tay vịn": "4D + LED",
            "Bảo hành": "5 năm"
        }
    },
    {
        id: 'chair-vintage-royal',
        name: 'Ghế Cổ Điển VINTAGE ROYAL ',
        category: 'chair',
        categoryName: 'Ghế Chủ Tịch',
        price: 45000000,
        badges: ['Antique Style', 'Handcarved', 'Limited 25/Year'],
        thumb: 'https://thuanduy.vn/wp-content/uploads/2022/05/sofa-don-tan-co-dien-2.png?w=800&q=100',
        gallery: [
            'https://thuanduy.vn/wp-content/uploads/2022/05/sofa-don-tan-co-dien-2.png?w=1600'
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
        name: 'Bàn Ăn Kính Trong Suốt IMPERIAL COMMAND ',
        category: 'desk',
        categoryName: 'Bàn Giám Đốc',
        price: 58000000,
        badges: ['Smart Desk', 'Bulletproof Glass', 'Command Center'],
        thumb: 'https://nhomkinhtiencuong.vn/uploads/san-pham/kinh-mat-ban-an-cuong-luc.jpg?w=800&q=100',
        gallery: [
            'https://nhomkinhtiencuong.vn/uploads/san-pham/kinh-mat-ban-an-cuong-luc.jpg?w=1600'
        ],
        shortDesc: 'Bàn ăn sang trọng, thanh lịch với kính trong suốt.',
        story: 'Một bữa ăn ngon không chỉ từ món ăn mà là không gian ăn uống. Bàn ăn IMPERIAL đem sự đẳng cấp, quý phái.',
        specs: {
            "Mặt bàn": "Kính nhập khẩu Đức 20mm",
            "Màn hình": "55inch  tích hợp",
            "Điều khiển": "Smart office system",
            "Kích thước": "2500x1200x750mm",
            "Bảo hành": "10 năm"
        }
    },
    {
        id: 'lamp-aurora-premium',
        name: 'Đèn AURORA PREMIUM ',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 28500000,
        badges: ['Premium Aurora', 'Voice Control', 'Mood Lighting'],
        thumb: 'https://www.thietbidiendgp.vn/media/products/800/n15-56.jpg?w=800&q=100',
        gallery: [
            'https://www.thietbidiendgp.vn/media/products/800/n15-56.jpg?w=1600'
        ],
        shortDesc: 'Đèn cao cấp với hiệu ứng cực quang, đèn chùm sang trọng.',
        story: 'AURORA PREMIUM nâng cấp từ phiên bản gốc năm 1987. Thể hiện được sự đẳng cấp, sang trọng khi ánh đèn chiếu rọi.',
        specs: {
            "Hiệu ứng": "Aurora simulation",
            "Công suất": "25W LED",
            "Bảo hành": "7 năm"
        }
    },
    {
        id: 'lamp-crystal-chandelier',
        name: 'Đèn Chùm CRYSTAL CHANDELIER ',
        category: 'lamp',
        categoryName: 'Đèn Hoàng Gia',
        price: 85000000,
        badges: ['Swarovski Crystal', 'Handcrafted', 'Palace Style'],
        thumb: 'https://product.hstatic.net/200000239963/product/stefanie-vi-swarovski-elements_b5ca7c5f08b94cd58b3c2c742e189fd3_grande.jpg?w=800&q=100',
        gallery: [
            'https://product.hstatic.net/200000239963/product/stefanie-vi-swarovski-elements_b5ca7c5f08b94cd58b3c2c742e189fd3_grande.jpg?w=1600'
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
        id: 'shelf-library-imperial',
        name: 'Tủ Sách TAURIK ',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 95000000,
        badges: ['Library System', 'Mahogany Wood', 'Ladder Included'],
        thumb: 'https://govi.vn/wp-content/uploads/2022/12/hai-hoa-mau-sac.jpg?w=800&q=100',
        gallery: [
            'https://govi.vn/wp-content/uploads/2022/12/hai-hoa-mau-sac.jpg?w=1600'
        ],
        shortDesc: 'Tủ sách TAURIK , chứa 1000+ cuốn sách.',
        story: 'TAURIK tái hiện sự thanh lịch, snag trọng khi chứa đựng hàng ngàn kiến thức. Không gian tri thức đẳng cấp.',
        specs: {
            "Chiều cao": "200mm",
            "Dung tích": "1000+ sách",
            "Phân loại": "Auto cataloging",
            "Bảo hành": "5 năm"
        }
    },
    {
        id: 'audio-turntable-walnut',
        name: 'Máy Đĩa Than HERITAGE',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 32000000,
        badges: ['Hi-Fi Audio', 'Walnut Wood', 'Analog'],
        // Máy nghe nhạc đĩa than sang trọng
        thumb: 'https://cdn.stereo.vn/uploads/2024/11/The-Classic-Reference-Acacia-Brass-lifestyle-11.jpg?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://cdn.stereo.vn/uploads/2024/11/The-Classic-Reference-Acacia-Brass-lifestyle-11.jpg?auto=format&fit=crop&w=1600'
        ],
        shortDesc: 'Đầu đĩa than Hi-End. Thân gỗ Óc Chó tự nhiên, tay cần Carbon.',
        story: 'Thưởng thức âm nhạc theo cách nguyên bản nhất. Thân máy làm từ gỗ Óc Chó (Walnut) đặc nguyên khối giúp triệt tiêu rung động. Tay cần (Tonearm) bằng sợi Carbon siêu nhẹ. Không chỉ là thiết bị nghe nhạc, đây là món đồ nội thất thể hiện gu thẩm mỹ tinh tế của gia chủ.',
        specs: {
            "Tốc độ": "33/45 RPM",
            "Chất liệu": "Gỗ Óc Chó & Mâm Acrylic",
            "Kết nối": "Bluetooth AptX HD + RCA Phono",
            "Kim đọc": "Ortofon 2M Red (Đan Mạch)",
            "Kích thước": "42cm x 36cm"
        }
    },
    {
        id: 'clock-hermle-modern',
        name: 'Đồng Hồ HERMLE TEMPO',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 89000000,
        badges: ['Made in Germany', 'Cơ Khí', 'Westminster Chime'],
        thumb: 'https://donghoduyanh.com/upload_images/images/2023/11/28/dong-ho-treo-tuong-sang-trong-3.jpg?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://donghoduyanh.com/upload_images/images/2023/11/28/dong-ho-treo-tuong-sang-trong-3.jpg?auto=format&fit=crop&w=1600'
        ],
        shortDesc: 'Đồng hồ cây cơ khí phong cách hiện đại. Bộ máy Đức, vỏ gỗ Piano Black bóng.',
        story: 'Sự giao thoa giữa cơ khí chính xác của Đức và thiết kế nội thất đương đại. Không còn là những chiếc đồng hồ già nua, Hermle Tempo mang dáng vẻ thanh thoát với 3 mặt kính cường lực, lộ trọn bộ máy mạ vàng đang hoạt động bên trong. Tiếng chuông Westminster ngân vang mỗi 15 phút.',
        specs: {
            "Bộ máy": "Hermle 451 Mechanical (Đức)",
            "Lên dây cót": "Chu kỳ 8 ngày (Cable-driven)",
            "Chất liệu vỏ": "Gỗ Piano Black & Kính cường lực",
            "Kích thước": "Cao 50cm x Rộng 48cm",
            "Tính năng": "Tự động ngắt chuông đêm"
        }
    },
    {
        id: 'speaker-devialet-phantom',
        name: 'Loa Decor PHANTOM OPERA',
        category: 'accessory',
        categoryName: 'Phụ Kiện Nội Thất',
        price: 105000000,
        badges: ['Hi-End Audio', 'Gold Leaf', 'Bluetooth'],
        thumb: 'https://baochauelec.com/upload/original-image/loa-nghe-nhac-co-dien-8.jpg?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://baochauelec.com/upload/original-image/loa-nghe-nhac-co-dien-8.jpg?auto=format&fit=crop&w=1600'
        ],
        shortDesc: 'Loa không dây công suất khủng, thiết kế tối giản nhưng hiện đại.',
        story: 'Không chỉ là loa, đây là một tác phẩm điêu khắc âm thanh. Phantom Opera sở hữu sức mạnh 4500W nhưng kích thước chỉ bằng một quả cầu. Âm bass sâu đến mức bạn có thể cảm nhận bằng cơ thể.',
        specs: {
            "Công suất": "4500 Watts / 108 dB",
            "Kết nối": "Wi-Fi, Bluetooth, Optical, AirPlay 2",
            "Dải tần": "14Hz – 27kHz",
            "Xuất xứ": "Pháp"
        }
    },
    {
        id: 'safe-leather-luxury',
        name: 'Két Sắt Bọc Da VANTAGE',
        category: 'shelf',
        categoryName: 'Tủ Trang Trí',
        price: 55000000,
        badges: ['Fingerprint', 'Watch Winder', 'Leather'],
        thumb: 'https://cdn.hstatic.net/products/200000309717/_70__6c486bf2641b4bff8320f107755b0230_master.jpg?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://cdn.hstatic.net/products/200000309717/_70__6c486bf2641b4bff8320f107755b0230_master.jpg?auto=format&fit=crop&w=1600'
        ],
        shortDesc: 'Két sắt thông minh ngụy trang tủ đầu giường, bọc da Nappa, tích hợp xoay đồng hồ.',
        story: 'VANTAGE xóa bỏ hình ảnh thô kệch của két sắt truyền thống. Bên ngoài bọc da Nappa màu nâu Cafe chần chỉ trám, nhìn như một chiếc tủ decor cao cấp. Bên trong lót nhung đỏ, tích hợp 4 trục xoay đồng hồ cơ (Watch Winder) và hệ thống khóa vân tay sinh trắc học Thụy Điển.',
        specs: {
            "Trọng lượng": "60kg",
            "Khóa": "Vân tay + Mã số điện tử",
            "Tiện ích": "4 trục xoay đồng hồ + Ngăn trang sức",
            "Chất liệu": "Thép đúc nguyên khối + Da Nappa",
            "Chống cháy": "1000 độ C trong 2 giờ"
        }
    },
];

function getAllProducts() { return products; }
function getProductById(id) { return products.find(p => p.id === id); }
function getProductsByCategory(category) { return category === 'all' ? products : products.filter(p => p.category === category); }
function formatCurrency(amount) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount); }