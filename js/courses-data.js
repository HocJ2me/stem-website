// BKSteam Course Data — all lesson content for preview pages
const COURSES_DATA = {
  // ============ TIỂU HỌC ============
  'robot-rio-co-ban': {
    id: 'robot-rio-co-ban',
    title: 'Phát triển Tư duy với Robot Rio – Cơ bản',
    grade: 'Tiểu học (lớp 3–4)',
    level: 'Dễ',
    sessions: 12,
    tool: 'Block-code / Robot Rio',
    subject: 'lap-trinh',
    emoji: '🤖',
    color: 'linear-gradient(135deg,#EEF2FF,#E0E7FF)',
    img: 'images/bkstar/landing-robotics.png',
    description: 'Khóa học đầu tiên về tư duy lập trình dành cho học sinh Tiểu học thông qua robot Rio thân thiện. Học sinh học cách ra lệnh cho robot di chuyển, tránh vật cản và hoàn thành nhiệm vụ bằng chuỗi lệnh block-code đơn giản — không cần gõ code.',
    outcomes: [
      'Hiểu khái niệm thuật toán đơn giản qua câu chuyện robot',
      'Lập trình block-code điều khiển Robot Rio: tiến, lùi, rẽ trái, rẽ phải',
      'Tư duy tuần tự và phân tách bài toán thành các bước nhỏ',
      'Hoàn thành 3 dự án thực tế: đường mê cung, giao hàng, cứu hộ',
      'Hợp tác nhóm và trình bày sản phẩm trước lớp',
    ],
    modules: [
      {
        name: 'Module 1: Làm quen với Robot Rio',
        lessons: [
          { title: 'Bài 1: Robot là gì? Robot Rio có thể làm gì?', free: true, duration: '45 phút',
            content: {
              intro: 'Bài học khám phá thế giới robot xung quanh chúng ta. Học sinh tìm hiểu robot Rio — người bạn đồng hành trong suốt khóa học — và cùng đặt những câu hỏi thú vị: Robot ăn gì? Robot có biết buồn không? Robot học như thế nào?',
              steps: [
                { step: 1, title: 'Khởi động (10 phút)', desc: 'Xem video "Robot trong cuộc sống": robot nhà máy, robot phẫu thuật, robot thám hiểm Sao Hỏa. Thảo luận: em thấy robot nào thú vị nhất?' },
                { step: 2, title: 'Gặp gỡ Robot Rio (15 phút)', desc: 'Giới thiệu Robot Rio: các bộ phận (cảm biến, bánh xe, đèn LED, loa). Học sinh quan sát và đặt tên cho robot của nhóm mình. Demo robot tự di chuyển theo chương trình mẫu.' },
                { step: 3, title: 'Thực hành đầu tiên (15 phút)', desc: 'Mở phần mềm Block-code. Kéo lệnh "Tiến thẳng 1 bước" → Nhấn RUN → Xem robot di chuyển. Thử các lệnh đơn giản: tiến, lùi, xoay trái/phải.' },
                { step: 4, title: 'Chia sẻ & đánh giá (5 phút)', desc: 'Mỗi nhóm chia sẻ điều thú vị nhất về robot của mình. Giao bài về nhà: vẽ robot mơ ước.' },
              ],
              tip: '💡 Mẹo giáo viên: Cho phép học sinh đặt tên riêng cho robot — điều này tạo cảm giác gắn kết và tăng động lực học tập lên rõ rệt.',
            }
          },
          { title: 'Bài 2: Ngôn ngữ của Robot – Lệnh Block đầu tiên', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh khám phá "ngôn ngữ" mà robot hiểu — các khối lệnh block-code màu sắc. Qua trò chơi đóng vai "người máy và lập trình viên", các em hiểu robot chỉ làm đúng những gì được ra lệnh.',
              steps: [
                { step: 1, title: 'Trò chơi đóng vai (10 phút)', desc: 'Một học sinh đóng vai "robot", các bạn khác ra lệnh bằng tiếng Việt. Ví dụ: "Tiến 3 bước → Rẽ trái → Tiến 2 bước → Dừng". Học sinh robot thực hiện đúng theo lệnh. Khám phá: nếu lệnh không rõ ràng, robot làm sai!' },
                { step: 2, title: 'Giới thiệu 4 lệnh cơ bản (10 phút)', desc: 'Mở phần mềm, giới thiệu 4 khối lệnh: ▶ Tiến X bước | ◀ Lùi X bước | ↺ Quay trái 90° | ↻ Quay phải 90°. Mỗi lệnh có màu sắc riêng để dễ nhận biết.' },
                { step: 3, title: 'Thử thách Đường thẳng (20 phút)', desc: 'Vẽ đường thẳng 50cm trên sàn. Thử thách: lập trình robot đi từ điểm A đến điểm B chính xác. Điều chỉnh số bước → Chạy thử → Điều chỉnh lại. Học sinh ghi lại số bước cần thiết.' },
                { step: 4, title: 'Kết luận (5 phút)', desc: 'Thảo luận: Tại sao lần đầu robot chưa đi đúng? Lập trình viên có bao giờ viết đúng ngay từ đầu không? Giới thiệu khái niệm "debug" — sửa lỗi.' },
              ],
              tip: '💡 Mẹo: Dùng băng dính màu tạo đường đi trên sàn lớp để học sinh thấy rõ quỹ đạo robot.',
            }
          },
          { title: 'Bài 3: Robot đi đường vuông – Lập trình nhiều bước', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Vẽ Hình và Đường Mê Cung',
        lessons: [
          { title: 'Bài 4: Vẽ hình chữ nhật – Lặp lại và tiết kiệm code', free: false, duration: '45 phút' },
          { title: 'Bài 5: Robot trong mê cung – Thử thách đầu tiên', free: false, duration: '45 phút' },
          { title: 'Bài 6: Đèn LED và âm thanh – Biểu đạt cảm xúc robot', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Cảm Biến và Tương Tác',
        lessons: [
          { title: 'Bài 7: Cảm biến khoảng cách – Robot "nhìn" được!', free: false, duration: '45 phút' },
          { title: 'Bài 8: Robot tránh vật cản tự động', free: false, duration: '45 phút' },
          { title: 'Bài 9: Cảm biến màu sắc – Robot đọc màu', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 4: Dự Án Thực Tế',
        lessons: [
          { title: 'Bài 10: Dự án 1 – Robot giao hàng', free: false, duration: '45 phút' },
          { title: 'Bài 11: Dự án 2 – Robot cứu hộ', free: false, duration: '45 phút' },
          { title: 'Bài 12: Trình bày sản phẩm & tổng kết', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'scratch-co-ban': {
    id: 'scratch-co-ban',
    title: 'Lập trình Scratch – Cơ bản',
    grade: 'Tiểu học (lớp 4–5)',
    level: 'Dễ',
    sessions: 12,
    tool: 'Scratch 3.0',
    subject: 'lap-trinh',
    emoji: '🐱',
    color: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)',
    img: 'images/bkstar/landing-coding.png',
    description: 'Scratch là ngôn ngữ lập trình trực quan phổ biến nhất thế giới, được MIT phát triển dành cho trẻ em. Học sinh tạo ra các trò chơi, hoạt cảnh và câu chuyện tương tác trong khi học tư duy logic, vòng lặp và điều kiện — tất cả qua việc kéo thả khối lệnh màu sắc.',
    outcomes: [
      'Làm chủ giao diện Scratch: Sprite, Stage, Costumes, Sounds',
      'Lập trình sự kiện, vòng lặp và câu lệnh điều kiện',
      'Tạo trò chơi di chuyển nhân vật bằng bàn phím',
      'Xây dựng hệ thống điểm số và màn chơi đơn giản',
      'Hoàn thành và chia sẻ 2 trò chơi: đuổi bắt và né chướng ngại vật',
    ],
    modules: [
      {
        name: 'Module 1: Thế giới Scratch',
        lessons: [
          { title: 'Bài 1: Chào Scratch! Giao diện và những nhân vật đầu tiên', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh lần đầu mở Scratch và gặp gỡ Scratch Cat — linh vật của nền tảng. Khám phá ba vùng chính: Khối lệnh (màu sắc đẹp mắt), Khu vực lập trình (kéo thả) và Sân khấu (nơi diễn ra mọi thứ).',
              steps: [
                { step: 1, title: 'Khám phá giao diện (10 phút)', desc: 'Mở scratch.mit.edu (hoặc phiên bản offline). Giáo viên chỉ ra 3 vùng chính. Học sinh click thử vào các khối lệnh và xem điều gì xảy ra với Scratch Cat.' },
                { step: 2, title: 'Lệnh đầu tiên: Di chuyển và Xoay (15 phút)', desc: 'Kéo khối "Move 10 steps" → nhấn Enter → Scratch Cat bước đi! Thử "Turn 15 degrees". Thay đổi số trong ô → Chạy lại. Khám phá: số âm thì sao?' },
                { step: 3, title: 'Thêm nhân vật mới (15 phút)', desc: 'Click biểu tượng thêm Sprite. Chọn nhân vật yêu thích từ thư viện (50+ nhân vật). Đặt tên và điều chỉnh kích thước. Lập trình cả hai nhân vật cùng lúc.' },
                { step: 4, title: 'Lưu và chia sẻ (5 phút)', desc: 'Lưu dự án đầu tiên. Đặt tên dự án. Giới thiệu: Scratch là mạng xã hội — hàng triệu dự án từ trẻ em khắp thế giới!' },
              ],
              tip: '💡 Cho học sinh tự chọn nhân vật — khi được lựa chọn, các em có cảm giác "sở hữu" và học tốt hơn.',
            }
          },
          { title: 'Bài 2: Nhân vật biết nói – Lệnh Looks và Sound', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh học cách làm cho nhân vật "sống động" — nói chuyện, thay trang phục và phát âm thanh. Đây là bước đầu tạo câu chuyện tương tác.',
              steps: [
                { step: 1, title: 'Say Hello! (10 phút)', desc: 'Khối "Say [Hello!] for 2 seconds". Thay text → Chạy → Nhân vật nói! Thử "Think [Hmm...] for 3 seconds". Sự khác biệt là gì?' },
                { step: 2, title: 'Thay Costume (15 phút)', desc: 'Tab "Costumes" — nhiều trang phục khác nhau. Dùng khối "Switch costume to" để tạo hoạt ảnh. Tạo animation đơn giản: costume1 → chờ 0.3s → costume2 → lặp lại.' },
                { step: 3, title: 'Thêm âm thanh (15 phút)', desc: 'Tab "Sounds". Chọn âm thanh từ thư viện hoặc thu âm giọng nói. Dùng khối "Play sound [...]". Kết hợp animation + sound = nhân vật sống động!' },
                { step: 4, title: 'Mini project: Giới thiệu bản thân (5 phút)', desc: 'Tạo nhân vật tự giới thiệu tên, tuổi, sở thích. Chia sẻ với bạn bên cạnh.' },
              ],
              tip: '💡 Thu âm giọng học sinh vào nhân vật sẽ tạo ra tiếng cười và sự hứng khởi cực cao trong lớp!',
            }
          },
          { title: 'Bài 3: Sự kiện và Khi nào – Lập trình phản ứng', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Chuyển động và Điều khiển',
        lessons: [
          { title: 'Bài 4: Nhân vật di chuyển theo bàn phím', free: false, duration: '45 phút' },
          { title: 'Bài 5: Vòng lặp – Robot biếng nhác nhưng thông minh', free: false, duration: '45 phút' },
          { title: 'Bài 6: Điều kiện IF – Nhân vật biết quyết định', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Game Design',
        lessons: [
          { title: 'Bài 7: Phát hiện va chạm – Khi hai nhân vật "chạm nhau"', free: false, duration: '45 phút' },
          { title: 'Bài 8: Hệ thống điểm số', free: false, duration: '45 phút' },
          { title: 'Bài 9: Màn hình bắt đầu và kết thúc game', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 4: Hoàn thành Game',
        lessons: [
          { title: 'Bài 10: Game Đuổi Bắt – Thiết kế hoàn chỉnh', free: false, duration: '45 phút' },
          { title: 'Bài 11: Game Né Chướng Ngại Vật', free: false, duration: '45 phút' },
          { title: 'Bài 12: Game Jam – Trình bày & đánh giá', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'scratch-nang-cao': {
    id: 'scratch-nang-cao',
    title: 'Lập trình Scratch – Nâng cao',
    grade: 'Tiểu học (lớp 5) – THCS (lớp 6)',
    level: 'Trung bình',
    sessions: 16,
    tool: 'Scratch 3.0',
    subject: 'lap-trinh',
    emoji: '🎮',
    color: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)',
    img: 'images/bkstar/landing-coding.png',
    description: 'Khóa học nâng cao giúp học sinh xây dựng những trò chơi phức tạp với nhiều màn chơi, nhân vật, điểm số và hiệu ứng âm thanh. Học sinh học về biến số, hàm (blocks tùy chỉnh), clone và kết nối phần cứng qua Scratch.',
    outcomes: [
      'Làm việc với biến số (Variables) để lưu trữ dữ liệu game',
      'Tạo hàm tùy chỉnh (My Blocks) để tái sử dụng code',
      'Sử dụng Clone để tạo nhiều đối tượng giống nhau',
      'Tạo game nhiều màn với độ khó tăng dần',
      'Kết nối Scratch với phần cứng (cảm biến, đèn LED)',
    ],
    modules: [
      {
        name: 'Module 1: Biến số và Dữ liệu',
        lessons: [
          { title: 'Bài 1: Biến số – "Ngăn nhớ" của chương trình', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh khám phá biến số qua ví dụ thực tế: điểm số, mạng sống, đếm thời gian. Hiểu tại sao game cần "nhớ" thông tin giữa các lần click.',
              steps: [
                { step: 1, title: 'Bài toán thực tế (10 phút)', desc: 'Câu đố: Làm sao game biết bạn đang có bao nhiêu điểm? Làm sao game nhớ bạn đang ở màn mấy? → Đáp án: Biến số! Giới thiệu khái niệm bằng hộp vật lý (viết số lên đó, thay đổi số).' },
                { step: 2, title: 'Tạo biến số trong Scratch (15 phút)', desc: 'Data → Make a Variable → Đặt tên "Score". Khối Set/Change/Show variable. Tạo biến "Lives" = 3. Demo: khi bắt được đồng xu → Score + 10; khi bị trúng chướng ngại → Lives - 1.' },
                { step: 3, title: 'Thực hành: Bộ đếm điểm (15 phút)', desc: 'Học sinh tự tạo game đơn giản có hệ thống điểm. Nhân vật ăn quả táo → điểm tăng. Hiển thị điểm trên màn hình. Thêm điều kiện: nếu điểm >= 50 → "Thắng!"' },
                { step: 4, title: 'Mở rộng (5 phút)', desc: 'Thảo luận: game của bạn cần những biến số nào khác? (thời gian, cấp độ, tên người chơi...)' },
              ],
              tip: '💡 Dùng hộp vật lý thật (hộp carton nhỏ có nhãn) để minh họa biến số — học sinh tiểu học hiểu ngay lập tức.',
            }
          },
          { title: 'Bài 2: Danh sách – Nhiều biến trong một', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh học List (danh sách) để lưu nhiều giá trị cùng lúc. Ứng dụng thực tế: bảng xếp hạng điểm cao nhất, danh sách câu hỏi quiz.',
              steps: [
                { step: 1, title: 'Vấn đề: Lưu 10 điểm cao nhất?', desc: 'Đặt vấn đề: Cần 10 biến Score1, Score2, ... Score10? Quá bất tiện! → Giới thiệu List: một "tủ sách" có nhiều "ngăn". Minh họa bằng bảng xếp hạng thực tế.' },
                { step: 2, title: 'Tạo và thao tác List (20 phút)', desc: 'Make a List → "High Scores". Các lệnh: Add, Delete, Insert, Item of, Length of. Thực hành: thêm 5 điểm vào list, hiển thị điểm cao nhất.' },
                { step: 3, title: 'Ứng dụng: Quiz Game (15 phút)', desc: 'Tạo list "Questions" và "Answers". Chương trình đọc câu hỏi từ list → Người chơi trả lời → So sánh với list đáp án. Tạo quiz 3 câu hỏi.' },
                { step: 4, title: 'Tổng kết (5 phút)', desc: 'So sánh: khi nào dùng biến, khi nào dùng list?' },
              ],
              tip: '💡 Cho học sinh tự đặt câu hỏi quiz về môn học yêu thích — sẽ tạo sự hứng thú cao.',
            }
          },
          { title: 'Bài 3: Hàm tùy chỉnh (My Blocks) – Code không lặp lại', free: false, duration: '45 phút' },
          { title: 'Bài 4: Clone – Nhân vô số đối tượng', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Game Architecture',
        lessons: [
          { title: 'Bài 5: Thiết kế màn chơi với Backdrop', free: false, duration: '45 phút' },
          { title: 'Bài 6: Game Platformer – Trọng lực và nhảy', free: false, duration: '45 phút' },
          { title: 'Bài 7: Âm nhạc và Hiệu ứng trong Scratch', free: false, duration: '45 phút' },
          { title: 'Bài 8: Lưu trữ điểm cao với Cloud Variables', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Dự Án Lớn',
        lessons: [
          { title: 'Bài 9–12: Game Hoàn Chỉnh – Thiết kế theo nhóm (4 tiết)', free: false, duration: '4 × 45 phút' },
        ]
      },
      {
        name: 'Module 4: Kết Nối Thực Tế',
        lessons: [
          { title: 'Bài 13: Scratch + Phần cứng – Điều khiển đèn LED', free: false, duration: '45 phút' },
          { title: 'Bài 14: Cảm biến chuyển động điều khiển game', free: false, duration: '45 phút' },
          { title: 'Bài 15: Xây dựng bộ tay game tự chế', free: false, duration: '45 phút' },
          { title: 'Bài 16: Game Jam – Triển lãm sản phẩm', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'lap-trinh-scratch-jr': {
    id: 'lap-trinh-scratch-jr',
    title: 'Lập trình Scratch JR',
    grade: 'Tiểu học (lớp 1–3)',
    level: 'Dễ',
    sessions: 10,
    tool: 'Scratch JR (Tablet)',
    subject: 'lap-trinh',
    emoji: '🐱',
    color: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)',
    img: 'images/bkstar/landing-coding.png',
    description: 'Scratch Jr là ứng dụng lập trình đặc biệt dành cho trẻ em 5–7 tuổi, không cần biết đọc. Học sinh kéo thả các khối lệnh có hình ảnh trực quan để tạo câu chuyện, hoạt hình và trò chơi đơn giản trên máy tính bảng.',
    outcomes: [
      'Làm quen với lập trình qua hình ảnh, không cần đọc chữ',
      'Tạo hoạt hình nhân vật di chuyển và nói chuyện',
      'Hiểu khái niệm trình tự lệnh và vòng lặp cơ bản',
      'Kể câu chuyện tương tác bằng Scratch JR',
    ],
    modules: [
      {
        name: 'Module 1: Khởi đầu vui vẻ',
        lessons: [
          { title: 'Bài 1: Mở ứng dụng và gặp nhân vật đầu tiên', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh khám phá Scratch JR trên máy tính bảng. Nhận ra các khối lệnh bằng màu sắc và hình ảnh — không cần đọc được chữ.',
              steps: [
                { step: 1, title: 'Mở Scratch JR và khám phá (10 phút)', desc: 'Mở app → Xem màn hình chào. Gặp nhân vật mặc định (cậu bé vàng). Chạm vào nhân vật → Nhân vật phản ứng!' },
                { step: 2, title: 'Khối lệnh màu vàng: Di chuyển (15 phút)', desc: 'Giới thiệu 4 khối di chuyển (→ ← ↑ ↓). Kéo khối → vào khu vực lập trình. Nhấn nút xanh lá → Nhân vật chạy! Xếp nhiều khối → Nhân vật đi dài hơn.' },
                { step: 3, title: 'Khối xanh lá: Nhìn (15 phút)', desc: 'Khối "Lớn hơn" và "Nhỏ hơn". Làm nhân vật to lên / nhỏ đi. Khối ẩn / hiện. Tạo magic trick: nhân vật biến mất rồi xuất hiện!' },
                { step: 4, title: 'Tự do khám phá (5 phút)', desc: 'Học sinh tự thử các khối khác màu sắc. Ai tìm ra điều thú vị nhất?' },
              ],
              tip: '💡 Để máy tính bảng nằm ngang — Scratch JR được thiết kế cho màn hình landscape.',
            }
          },
          { title: 'Bài 2: Nhân vật di chuyển theo đường', free: false, duration: '45 phút' },
          { title: 'Bài 3: Thêm nhân vật và nền', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Kể Chuyện',
        lessons: [
          { title: 'Bài 4: Tạo câu chuyện "Một ngày của tôi"', free: false, duration: '45 phút' },
          { title: 'Bài 5: Nhiều cảnh và chuyển cảnh', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Tương Tác',
        lessons: [
          { title: 'Bài 6: Khi chạm vào – Nhân vật phản ứng', free: false, duration: '45 phút' },
          { title: 'Bài 7: Vòng lặp – Làm mãi mãi', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 4: Dự Án Kết Thúc',
        lessons: [
          { title: 'Bài 8: Thiết kế câu chuyện riêng', free: false, duration: '45 phút' },
          { title: 'Bài 9: Hoàn thiện và trang trí', free: false, duration: '45 phút' },
          { title: 'Bài 10: Trình bày câu chuyện trước lớp', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'lap-rap-robotics': {
    id: 'lap-rap-robotics',
    title: 'Lắp ráp và Lập trình Robotics',
    grade: 'Tiểu học (lớp 4–5)',
    level: 'Dễ',
    sessions: 16,
    tool: 'Robotics Kit',
    subject: 'robotics',
    emoji: '⚙️',
    color: 'linear-gradient(135deg,#D1FAE5,#A7F3D0)',
    img: 'images/bkstar/landing-robotics.png',
    description: 'Học sinh tự tay lắp ráp robot từ các chi tiết cơ khí và lập trình để robot thực hiện nhiệm vụ. Kết hợp kiến thức cơ học, điện tử và lập trình trong các dự án thực tế hấp dẫn.',
    outcomes: [
      'Lắp ráp robot cơ bản từ bộ kit: bánh xe, động cơ, cảm biến',
      'Lập trình điều khiển robot qua block-code',
      'Hiểu cơ chế truyền động và chuyển đổi năng lượng',
      'Hoàn thành 3 dự án: xe tự hành, cánh tay robot, robot cảm biến',
    ],
    modules: [
      {
        name: 'Module 1: Cơ học và Lắp ráp',
        lessons: [
          { title: 'Bài 1: Các chi tiết cơ bản – Tên gọi và chức năng', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh mở hộp kit robot lần đầu tiên. Khám phá và phân loại hơn 50 chi tiết: bánh răng, trục, bánh xe, thanh đỡ, bu lông. Hiểu mỗi chi tiết có chức năng riêng như "bộ phận cơ thể người".',
              steps: [
                { step: 1, title: 'Khám phá Kit (10 phút)', desc: 'Đổ kit ra khay. Học sinh quan sát và phân loại: "cái này giống gì?". So sánh bánh răng với bánh xe đạp — cùng nguyên lý truyền chuyển động.' },
                { step: 2, title: 'Nhận diện 8 chi tiết chính (15 phút)', desc: 'Giáo viên giới thiệu: 1. Khung thân robot, 2. Động cơ DC, 3. Bánh xe, 4. Bánh răng, 5. Trục kết nối, 6. Cảm biến, 7. Bảng điều khiển, 8. Pin. Mỗi nhóm tự tìm các chi tiết trong kit.' },
                { step: 3, title: 'Lắp ráp khung cơ bản (15 phút)', desc: 'Theo hướng dẫn: Gắn 2 động cơ vào khung. Gắn bánh xe vào trục động cơ. Kết nối dây điện. Bật nguồn → Robot chạy lần đầu!' },
                { step: 4, title: 'Thảo luận (5 phút)', desc: 'Tại sao robot cần 2 động cơ riêng biệt? Làm sao robot rẽ trái/phải nếu chỉ có bánh xe?' },
              ],
              tip: '💡 Dán nhãn từng loại chi tiết trước khi phát cho học sinh — giúp học sinh tìm đúng chi tiết nhanh hơn.',
            }
          },
          { title: 'Bài 2: Lắp ráp xe robot hoàn chỉnh', free: true, duration: '45 phút',
            content: {
              intro: 'Nhóm học sinh hoàn thành việc lắp ráp xe robot di chuyển được. Đây là lần đầu thấy "đứa con" của mình chạy được — khoảnh khắc rất đáng nhớ!',
              steps: [
                { step: 1, title: 'Kết nối board điều khiển (15 phút)', desc: 'Gắn board điều khiển vào khung. Kết nối 2 dây motor vào board (chú ý cực + và -). Gắn pin. Kiểm tra kết nối.' },
                { step: 2, title: 'Test đơn giản: Chạy thẳng (20 phút)', desc: 'Mở phần mềm lập trình. Khối "Motor trái: tiến | Motor phải: tiến | Chờ 2 giây | Dừng". Nhấn RUN → Robot chạy thẳng! Điều chỉnh tốc độ: 50% → 80% → 100%. Quan sát sự thay đổi.' },
                { step: 3, title: 'Debug (10 phút)', desc: 'Một số nhóm robot sẽ không chạy thẳng → Tại sao? (dây sai cực, 2 bánh xe tốc độ khác nhau). Học sinh tự tìm lỗi và sửa — đây là kỹ năng debug quan trọng!' },
              ],
              tip: '💡 Cố ý để một số nhóm lắp sai dây để học sinh tự khám phá cách debug — tốt hơn là lắp đúng ngay từ đầu.',
            }
          },
          { title: 'Bài 3: Robot rẽ trái rẽ phải – Vi sai động cơ', free: false, duration: '45 phút' },
          { title: 'Bài 4: Robot đi theo hình vuông và chữ L', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Cảm Biến',
        lessons: [
          { title: 'Bài 5: Cảm biến siêu âm – "Mắt" của robot', free: false, duration: '45 phút' },
          { title: 'Bài 6: Robot tự tránh vật cản', free: false, duration: '45 phút' },
          { title: 'Bài 7: Cảm biến dò đường – Robot đi theo vạch', free: false, duration: '45 phút' },
          { title: 'Bài 8: Thử thách đường đua', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Dự Án',
        lessons: [
          { title: 'Bài 9–12: Dự án Xe Tự Hành Phân Loại Rác (4 tiết)', free: false, duration: '4 × 45 phút' },
          { title: 'Bài 13–15: Dự án Cánh Tay Robot (3 tiết)', free: false, duration: '3 × 45 phút' },
          { title: 'Bài 16: Triển lãm Robot & Tổng kết', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'du-an-stem-sang-tao': {
    id: 'du-an-stem-sang-tao',
    title: 'Dự án STEM Sáng tạo',
    grade: 'Tiểu học (lớp 4–5)',
    level: 'Dễ',
    sessions: 12,
    tool: 'IoT Kit / Micro:bit',
    subject: 'ai-iot',
    emoji: '💡',
    color: 'linear-gradient(135deg,#FEF3C7,#FDE68A)',
    img: 'images/bkstar/landing-ai-iot.png',
    description: 'Học sinh thực hiện các dự án STEM mini gắn với vấn đề thực tế: đo nhiệt độ phòng, điều khiển đèn LED, làm nhạc cụ điện tử. Mỗi dự án kết hợp kỹ thuật, nghệ thuật và khoa học.',
    outcomes: [
      'Hiểu các linh kiện điện tử cơ bản: LED, nút bấm, cảm biến',
      'Lập trình Micro:bit qua block-code trực quan',
      'Hoàn thành 4 dự án STEM mini thực tế',
      'Thuyết trình sản phẩm và giải thích nguyên lý hoạt động',
    ],
    modules: [
      {
        name: 'Module 1: Điện tử Cơ bản',
        lessons: [
          { title: 'Bài 1: LED và Mạch Điện – Ánh sáng trong tay bạn', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh lần đầu làm cho đèn LED sáng lên bằng tay mình. Hiểu mạch điện đơn giản qua trò chơi "con đường của dòng điện".',
              steps: [
                { step: 1, title: 'Con đường điện (10 phút)', desc: 'Dùng sợi dây nhảy mô phỏng dòng điện. Học sinh đứng thành vòng tròn, nắm tay nhau = mạch kín → đèn sáng. Ai thả tay = mạch hở → đèn tắt.' },
                { step: 2, title: 'Kết nối LED đầu tiên (15 phút)', desc: 'Kết nối pin (3V) → dây đỏ (+) → LED → dây đen (-) → pin. Đèn sáng! Đảo ngược dây → LED không sáng (LED có cực). Học sinh hiểu khái niệm cực dương/âm.' },
                { step: 3, title: 'Micro:bit điều khiển LED (15 phút)', desc: 'Kết nối LED vào pin P0 của Micro:bit. Lập trình: "Khi khởi động → P0 = cao → LED sáng". Thêm: "Khi nhấn nút A → LED sáng; khi nhấn B → LED tắt".' },
                { step: 4, title: 'Sáng tạo (5 phút)', desc: 'Thử thách: tạo đèn nhấp nháy 0.5 giây. Ai làm được thêm thử thách: đèn nhấp nháy SOS (... --- ...).' },
              ],
              tip: '💡 Cho mỗi học sinh giữ một LED riêng để đem về nhà — chi phí thấp nhưng giá trị kỷ niệm cao.',
            }
          },
          { title: 'Bài 2: Cảm biến Nhiệt độ – Đọc thời tiết', free: false, duration: '45 phút' },
          { title: 'Bài 3: Nút bấm và Đèn tín hiệu', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Dự Án Mini',
        lessons: [
          { title: 'Bài 4–5: Dự án 1: Đồng hồ nhiệt độ phòng', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 6–7: Dự án 2: Nhạc cụ điện tử (Theremin)', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 8–9: Dự án 3: Đèn tự động bật/tắt', free: false, duration: '2 × 45 phút' },
        ]
      },
      {
        name: 'Module 3: Dự Án Lớn',
        lessons: [
          { title: 'Bài 10–11: Dự án 4: Trạm thời tiết thông minh', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 12: Triển lãm sản phẩm STEM', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'thiet-ke-3d-tieu-hoc': {
    id: 'thiet-ke-3d-tieu-hoc',
    title: 'Thiết kế 3D – Tiểu học',
    grade: 'Tiểu học (lớp 4–5)',
    level: 'Dễ',
    sessions: 10,
    tool: 'Tinkercad',
    subject: 'thiet-ke-3d',
    emoji: '🖨️',
    color: 'linear-gradient(135deg,#FCE7F3,#FBCFE8)',
    img: 'images/bkstar/landing-3d-design.png',
    description: 'Học sinh thiết kế vật thể 3D bằng phần mềm Tinkercad miễn phí — chạy trực tiếp trên trình duyệt. Từ hộp đơn giản đến tên nhân vật 3D, học sinh làm quen với tư duy không gian và thiết kế kỹ thuật số.',
    outcomes: [
      'Làm chủ Tinkercad: di chuyển, xoay, phóng to thu nhỏ',
      'Tạo vật thể 3D từ các hình cơ bản: hộp, trụ, cầu',
      'Kết hợp hình và đục khoét tạo vật thể phức tạp',
      'Xuất file STL sẵn sàng in 3D',
    ],
    modules: [
      {
        name: 'Module 1: Tinkercad Cơ Bản',
        lessons: [
          { title: 'Bài 1: Chào thế giới 3D – Di chuyển và xoay góc nhìn', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh bước vào không gian 3D lần đầu tiên. Học cách "nhìn" vật thể từ mọi góc độ — đây là kỹ năng tư duy không gian quan trọng.',
              steps: [
                { step: 1, title: 'Tinkercad là gì? (5 phút)', desc: 'Xem video 1 phút về in 3D. Cho học sinh thấy vật in 3D thật (nếu có). "Mọi thứ các em thấy đều bắt đầu từ màn hình máy tính!"' },
                { step: 2, title: 'Điều hướng 3D (15 phút)', desc: 'Chuột phải + kéo = xoay góc nhìn. Scroll = zoom. Chuột giữa + kéo = di chuyển. Thực hành: nhìn hình hộp từ 6 mặt khác nhau. Thử tìm "góc nhìn đẹp nhất".' },
                { step: 3, title: 'Kéo thả hình đầu tiên (20 phút)', desc: 'Kéo hình Cylinder vào khu vực làm việc. Chọn hộp → Kéo mũi tên màu đỏ/xanh/xanh lá để di chuyển. Kéo các chấm vuông nhỏ để thay đổi kích thước. Thay đổi màu sắc.' },
                { step: 4, title: 'Challenge (5 phút)', desc: 'Xây dựng "ngôi nhà đơn giản" chỉ dùng hình hộp và hình tháp. Ai xây nhanh nhất?' },
              ],
              tip: '💡 Tinkercad chạy hoàn toàn trên browser — không cần cài đặt. Đảm bảo Chrome/Firefox cập nhật.',
            }
          },
          { title: 'Bài 2: Kéo thả và Chỉnh kích thước', free: false, duration: '45 phút' },
          { title: 'Bài 3: Đục khoét – Tạo lỗ và hốc trong vật thể', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Dự Án',
        lessons: [
          { title: 'Bài 4: Móc chìa khóa tên của bạn', free: false, duration: '45 phút' },
          { title: 'Bài 5: Hộp đựng bút chì', free: false, duration: '45 phút' },
          { title: 'Bài 6: Dấu tên (Name Stamp) cá nhân', free: false, duration: '45 phút' },
          { title: 'Bài 7: Nhân vật Minecraft 3D', free: false, duration: '45 phút' },
          { title: 'Bài 8: Mô hình ngôi nhà', free: false, duration: '45 phút' },
          { title: 'Bài 9: Xuất file và chuẩn bị in 3D', free: false, duration: '45 phút' },
          { title: 'Bài 10: Triển lãm sản phẩm 3D', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  'thi-nghiem-khoa-hoc': {
    id: 'thi-nghiem-khoa-hoc',
    title: 'Thí nghiệm Khoa học',
    grade: 'Tiểu học (lớp 3–5)',
    level: 'Dễ',
    sessions: 15,
    tool: 'Virtual Labs',
    subject: 'khoa-hoc',
    emoji: '🧪',
    color: 'linear-gradient(135deg,#CFFAFE,#A5F3FC)',
    img: 'images/bkstar/landing-science.png',
    description: 'Học sinh thực hiện các thí nghiệm khoa học hấp dẫn qua phòng lab ảo — không giới hạn hóa chất, không nguy hiểm. Từ pha màu nước đến mô phỏng núi lửa phun, mỗi bài học là một cuộc phiêu lưu khoa học.',
    outcomes: [
      'Quy trình khoa học: Quan sát → Đặt câu hỏi → Giả thuyết → Thí nghiệm → Kết luận',
      'Thực hiện 10+ thí nghiệm ảo về vật lý, hóa học, sinh học',
      'Ghi chép nhật ký khoa học và báo cáo kết quả',
      'Thiết kế thí nghiệm riêng để trả lời câu hỏi tự đặt ra',
    ],
    modules: [
      {
        name: 'Module 1: Nhà Khoa Học Nhỏ',
        lessons: [
          { title: 'Bài 1: Tôi là nhà khoa học! Quy trình khoa học', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh trở thành nhà khoa học nhỏ. Khám phá quy trình khoa học qua câu chuyện thám tử — thám tử và nhà khoa học làm việc giống nhau: quan sát → suy luận → kiểm tra!',
              steps: [
                { step: 1, title: 'Trò chơi Thám Tử (10 phút)', desc: 'Để một vật trong hộp kín, học sinh lắc, nghe âm thanh, cảm nhận trọng lượng → đoán vật trong hộp. Đây chính là "khoa học": quan sát gián tiếp để suy luận.' },
                { step: 2, title: '5 Bước Quy Trình Khoa Học (15 phút)', desc: '1. Quan sát | 2. Đặt câu hỏi | 3. Giả thuyết | 4. Thí nghiệm | 5. Kết luận. Ví dụ thực tế: "Cây nào lớn nhanh hơn: tưới nước hay tưới nước ngọt?" → Đi qua 5 bước.' },
                { step: 3, title: 'Thí nghiệm Nước Màu Đầu Tiên (15 phút)', desc: 'Mở Virtual Lab: Pha màu nước. Học sinh dự đoán: đỏ + vàng = ? | xanh dương + vàng = ? | đỏ + xanh dương = ? → Thí nghiệm → Ghi kết quả → So sánh với dự đoán.' },
                { step: 4, title: 'Nhật ký Khoa học (5 phút)', desc: 'Giới thiệu "Nhật ký Khoa học" — mỗi bài học học sinh ghi lại. Hôm nay: vẽ vòng tròn màu sắc kết quả thí nghiệm.' },
              ],
              tip: '💡 Nhật ký khoa học bằng giấy (không phải máy tính) giúp học sinh tiểu học hình thành thói quen ghi chép tốt hơn.',
            }
          },
          { title: 'Bài 2: Vật nổi vật chìm – Trọng lực và lực đẩy', free: false, duration: '45 phút' },
          { title: 'Bài 3: Cầu vồng trong cốc nước', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Vật Lý Vui',
        lessons: [
          { title: 'Bài 4: Từ trường – Nam châm và kim loại', free: false, duration: '45 phút' },
          { title: 'Bài 5: Ánh sáng – Khúc xạ và phản chiếu', free: false, duration: '45 phút' },
          { title: 'Bài 6: Âm thanh – Sóng âm và rung động', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Sinh Học và Hóa Học',
        lessons: [
          { title: 'Bài 7: Tế bào sống – Quan sát qua kính hiển vi ảo', free: false, duration: '45 phút' },
          { title: 'Bài 8: Quang hợp – Cây ăn gì?', free: false, duration: '45 phút' },
          { title: 'Bài 9: Phản ứng hóa học – Núi lửa baking soda', free: false, duration: '45 phút' },
          { title: 'Bài 10: Điện hóa học – Pin từ chanh', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 4: Dự Án Khoa Học',
        lessons: [
          { title: 'Bài 11–14: Tự thiết kế thí nghiệm khoa học (4 tiết)', free: false, duration: '4 × 45 phút' },
          { title: 'Bài 15: Hội nghị Khoa học Nhỏ – Trình bày nghiên cứu', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  // ============ THCS ============
  'nha-thong-minh': {
    id: 'nha-thong-minh',
    title: 'Dự án Lớn: Nhà Thông Minh (Smart Home)',
    grade: 'THCS (lớp 6–8)',
    level: 'Trung bình',
    sessions: 20,
    tool: 'Arduino / IoT Kit',
    subject: 'ai-iot',
    emoji: '🏠',
    color: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)',
    img: 'images/bkstar/landing-ai-iot.png',
    description: 'Học sinh xây dựng mô hình nhà thông minh thu nhỏ với đầy đủ tính năng: đèn tự động, cửa nhận diện mật mã, điều hòa thông minh, hệ thống báo cháy. Dự án tích hợp Arduino, cảm biến, và lập trình C++ cơ bản.',
    outcomes: [
      'Lập trình Arduino với ngôn ngữ C++ cơ bản',
      'Kết nối và lập trình 6+ loại cảm biến khác nhau',
      'Thiết kế mạch điện tử và đấu dây an toàn',
      'Xây dựng hệ thống IoT hoàn chỉnh với giao tiếp Bluetooth',
      'Trình bày và demo sản phẩm kỹ thuật',
    ],
    modules: [
      {
        name: 'Module 1: Arduino và C++',
        lessons: [
          { title: 'Bài 1: Arduino là gì? Setup môi trường lập trình', free: true, duration: '45 phút',
            content: {
              intro: 'Giới thiệu Arduino Uno — não bộ của nhà thông minh. Cài đặt Arduino IDE và viết chương trình đầu tiên: Blink (LED nhấp nháy) — chương trình "Hello World" của phần cứng.',
              steps: [
                { step: 1, title: 'Arduino trong cuộc sống (10 phút)', desc: 'Video: Arduino trong drone, máy in 3D, robot, thiết bị y tế. "Arduino là công cụ giúp học sinh làm được những điều này!" — Xem sản phẩm của các học sinh khóa trước.' },
                { step: 2, title: 'Giải phẫu Arduino Uno (10 phút)', desc: 'Quan sát board Arduino: vi điều khiển, chân số, chân analog, nguồn, USB. So sánh với não người: nhận tín hiệu → xử lý → ra lệnh.' },
                { step: 3, title: 'Chương trình đầu tiên: Blink (20 phút)', desc: 'Cắm USB Arduino vào máy tính. Mở Arduino IDE → New Sketch. Gõ code Blink (có sẵn trong Examples). Upload → LED trên board nhấp nháy! Thay đổi delay(1000) thành delay(100) → LED chớp nhanh hơn.' },
                { step: 4, title: 'Debug (5 phút)', desc: 'Một số máy sẽ lỗi (chọn sai port, driver chưa cài). Học sinh tự tìm lỗi từ thông báo Serial Monitor.' },
              ],
              tip: '💡 Đảm bảo driver CH340/CP2102 đã cài trước buổi học — đây là nguyên nhân lỗi upload phổ biến nhất.',
            }
          },
          { title: 'Bài 2: Biến số và Hàm trong C++', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh học cú pháp C++ cơ bản qua ví dụ điều khiển LED. Hiểu tại sao cần hàm setup() và loop().',
              steps: [
                { step: 1, title: 'Cấu trúc chương trình Arduino (15 phút)', desc: 'setup() chạy 1 lần khi khởi động. loop() chạy liên tục mãi mãi. So sánh: setup() = "buổi sáng thức dậy chuẩn bị"; loop() = "làm đi làm lại suốt ngày".' },
                { step: 2, title: 'Biến số trong C++ (15 phút)', desc: 'int ledPin = 13; — khai báo biến. Tại sao cần biến? Nếu đổi chân LED, chỉ cần đổi 1 dòng thay vì đổi khắp code. Thực hành: thêm biến int blinkSpeed = 500;' },
                { step: 3, title: 'Điều khiển nhiều LED (15 phút)', desc: 'Gắn thêm 2 LED vào chân 12 và 11. Lập trình tuần tự: LED1 sáng → tắt → LED2 sáng → tắt → LED3 sáng → tắt → lặp lại. Tạo hiệu ứng "chạy đèn".' },
              ],
              tip: '💡 Dạy học sinh đặt tên biến có nghĩa ngay từ đầu (ledPin thay vì x) — thói quen tốt cho sau này.',
            }
          },
          { title: 'Bài 3: Serial Monitor và Debug', free: false, duration: '45 phút' },
          { title: 'Bài 4: Câu lệnh điều kiện if/else trong C++', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Cảm Biến và Actuators',
        lessons: [
          { title: 'Bài 5: Cảm biến nhiệt độ DHT11', free: false, duration: '45 phút' },
          { title: 'Bài 6: Cảm biến ánh sáng và đèn tự động', free: false, duration: '45 phút' },
          { title: 'Bài 7: Servo Motor – Cửa tự động', free: false, duration: '45 phút' },
          { title: 'Bài 8: Cảm biến PIR – Phát hiện chuyển động', free: false, duration: '45 phút' },
          { title: 'Bài 9: Cảm biến khí gas – Báo động', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Xây Dựng Smart Home',
        lessons: [
          { title: 'Bài 10–11: Thiết kế mô hình nhà và mạch điện', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 12–14: Lập trình hệ thống đèn thông minh', free: false, duration: '3 × 45 phút' },
          { title: 'Bài 15–16: Cửa khóa mật mã với keypad', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 17: Kết nối Bluetooth – Điều khiển từ điện thoại', free: false, duration: '45 phút' },
          { title: 'Bài 18: LCD hiển thị thông tin', free: false, duration: '45 phút' },
          { title: 'Bài 19: Tích hợp toàn bộ hệ thống', free: false, duration: '45 phút' },
          { title: 'Bài 20: Bảo vệ dự án – Demo Smart Home', free: false, duration: '45 phút' },
        ]
      }
    ]
  },

  // ============ THPT ============
  'python-co-ban': {
    id: 'python-co-ban',
    title: 'Lập trình Python – Cơ bản',
    grade: 'THCS (lớp 8–9) / THPT',
    level: 'Trung bình',
    sessions: 20,
    tool: 'Python 3.x / VSCode',
    subject: 'lap-trinh',
    emoji: '🐍',
    color: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
    img: 'images/bkstar/landing-coding.png',
    description: 'Python là ngôn ngữ lập trình phổ biến nhất thế giới — được dùng trong AI, khoa học dữ liệu, web và tự động hóa. Khóa học đưa học sinh từ "Hello World" đến xây dựng ứng dụng thực tế qua các dự án thú vị.',
    outcomes: [
      'Thành thạo cú pháp Python: biến, hàm, vòng lặp, điều kiện',
      'Làm việc với kiểu dữ liệu: list, dict, tuple, set',
      'Đọc/ghi file và xử lý dữ liệu CSV cơ bản',
      'Xây dựng 3 dự án: Calculator, Hangman Game, Phân tích dữ liệu',
      'Nền tảng để tiếp tục học AI/Data Science',
    ],
    modules: [
      {
        name: 'Module 1: Nền Tảng Python',
        lessons: [
          { title: 'Bài 1: Python là gì? Cài đặt và Hello World', free: true, duration: '45 phút',
            content: {
              intro: 'Python được dùng để tạo ra YouTube, Instagram, TikTok recommendation system, và hầu hết các hệ thống AI. Trong bài đầu tiên, học sinh viết dòng code Python đầu tiên và chạy thành công.',
              steps: [
                { step: 1, title: 'Python ở khắp nơi (10 phút)', desc: 'Các công ty nào dùng Python? Google, NASA, Netflix, Spotify. "Python là ngôn ngữ của AI" — ảnh minh họa. Tại sao học Python? Đơn giản, mạnh, phổ biến nhất việc làm IT.' },
                { step: 2, title: 'Cài Python + VSCode (15 phút)', desc: 'python.org → Download Python 3.x. Cài VSCode + extension Python. Mở terminal: gõ "python --version" → thấy số version = thành công!' },
                { step: 3, title: 'Hello World! (15 phút)', desc: 'Tạo file hello.py. Gõ: print("Xin chào thế giới!"). Chạy: python hello.py. Thấy chữ xuất hiện → "Bạn vừa lập trình Python đầu tiên!" Thay nội dung, chạy lại, vui!' },
                { step: 4, title: 'Khám phá thêm (5 phút)', desc: 'print(2 + 2) → 4. print("Python" * 3) → PythonPythonPython. Học sinh đặt câu hỏi và thử nghiệm.' },
              ],
              tip: '💡 Cài Anaconda thay vì Python standalone — dễ quản lý packages hơn cho học sinh.',
            }
          },
          { title: 'Bài 2: Biến số và Kiểu dữ liệu', free: true, duration: '45 phút',
            content: {
              intro: 'Học sinh học cách "lưu trữ thông tin" trong Python — cơ sở của mọi chương trình.',
              steps: [
                { step: 1, title: 'Biến số là gì? (10 phút)', desc: 'ten = "An" | tuoi = 15 | diem = 9.5. Dùng f-string: print(f"Tên tôi là {ten}, {tuoi} tuổi"). Python tự nhận biết kiểu dữ liệu (dynamic typing).' },
                { step: 2, title: '4 Kiểu dữ liệu cơ bản (20 phút)', desc: 'str = chữ ("xin chào"). int = số nguyên (15). float = số thực (9.5). bool = True/False. Hàm type() kiểm tra kiểu. Ép kiểu: int("42") → 42.' },
                { step: 3, title: 'Input từ người dùng (10 phút)', desc: 'ten = input("Tên bạn là gì? "). print(f"Xin chào {ten}!"). Chương trình tương tác với người dùng lần đầu! Lưu ý: input() luôn trả về string → phải ép kiểu nếu cần số.' },
                { step: 4, title: 'Mini Calculator (5 phút)', desc: 'a = float(input("Số 1: ")). b = float(input("Số 2: ")). print(f"Tổng: {a+b} | Hiệu: {a-b} | Tích: {a*b}").' },
              ],
              tip: '💡 f-string là cách hiện đại và đẹp nhất để format string trong Python — dạy ngay từ đầu.',
            }
          },
          { title: 'Bài 3: Điều kiện if/elif/else', free: false, duration: '45 phút' },
          { title: 'Bài 4: Vòng lặp for và while', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 2: Cấu Trúc Dữ Liệu',
        lessons: [
          { title: 'Bài 5: List – Danh sách trong Python', free: false, duration: '45 phút' },
          { title: 'Bài 6: Dictionary – Từ điển key-value', free: false, duration: '45 phút' },
          { title: 'Bài 7: Hàm (Function) – Tái sử dụng code', free: false, duration: '45 phút' },
          { title: 'Bài 8: Xử lý file văn bản và CSV', free: false, duration: '45 phút' },
        ]
      },
      {
        name: 'Module 3: Dự Án Thực Tế',
        lessons: [
          { title: 'Bài 9–10: Dự án 1: Máy tính Calculator', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 11–12: Dự án 2: Game Hangman (Đoán chữ)', free: false, duration: '2 × 45 phút' },
          { title: 'Bài 13–14: Dự án 3: Phân tích điểm lớp học', free: false, duration: '2 × 45 phút' },
        ]
      },
      {
        name: 'Module 4: Nâng Cao',
        lessons: [
          { title: 'Bài 15: Module và Package trong Python', free: false, duration: '45 phút' },
          { title: 'Bài 16: Xử lý ngoại lệ try/except', free: false, duration: '45 phút' },
          { title: 'Bài 17: Giới thiệu Lập trình hướng đối tượng (OOP)', free: false, duration: '45 phút' },
          { title: 'Bài 18: Web Scraping cơ bản với requests', free: false, duration: '45 phút' },
          { title: 'Bài 19: Giới thiệu Data Science với pandas', free: false, duration: '45 phút' },
          { title: 'Bài 20: Dự án cuối – Ứng dụng hoàn chỉnh', free: false, duration: '45 phút' },
        ]
      }
    ]
  },
};

// Helper to get course by id
function getCourse(id) { return COURSES_DATA[id] || null; }
function getAllCourses() { return Object.values(COURSES_DATA); }
