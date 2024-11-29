function loadPage(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('page-content').innerHTML = data;
      })
      .catch(error => {
        console.error("Không thể tải nội dung:", error);
        document.getElementById('page-content').innerHTML = "<p>Không thể tải nội dung, vui lòng thử lại.</p>";
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadPage('login.html');
  });
  
  // Hàm xử lý khi người dùng nhấn nút "Đăng nhập"
  function handleLogin() {
    const userType = document.getElementById('user-type').value;
    if (userType === 'agency') {
      loadPage('agency/agency_home.html');
    } else if (userType === 'company') {
      loadPage('company/company_home.html');
    } else if (userType === 'company1') {
      loadPage('company1/company1_home.html');
    } else {
      alert('Vui lòng chọn vai trò hợp lệ!');
    }
  }
  function goToCollectionInfoPage() {
    loadPage('agency/collection_info_page.html');
}
function goToHome() {
  loadPage('agency/agency_home.html');
}
function goToHome1() {
  loadPage('company/company_home.html');
}
function goToHome2() {
  loadPage('company1/company1_home.html');
}
function goToConatinerInfoPage() {
    loadPage('agency/container_info.html');
}
function goToMapPage() {
    loadPage('agency/container_map.html');
}
function goToChartPage() {
    loadPage('agency/chart.html');
}
function goToStoreInfoPage() {
  loadPage('company/store_info.html');
}
function goToGarbagePage() {
  loadPage('company/garbage.html');
}
function goToStoreInfoPage1() {
  loadPage('company1/store_info.html');
}
function goToGarbagePage1() {
  loadPage('company1/garbage1.html');
}
function goToCar() {
  loadPage('company1/store_info1.html');
}
function goToMap() {
  loadPage('company1/container_map1.html');
}
function logoutFunction(){
  loadPage('login.html');
}
function goToMap1() {
  loadPage('company1/container_map2.html');
}
function goToMap2() {
  loadPage('company1/container_map3.html');
}
function enterCollectedWeight() {
  let weight = prompt("Nhập khối lượng thu gom (kg):");
  if (weight) {
    document.getElementById("weightDisplay").innerText = weight;
  }
}

document.getElementById("monthSelect").addEventListener("change", checkSelection);
document.getElementById("statisticSelect").addEventListener("change", checkSelection);

function updateRecycledWeight(value) {
  const recycledWeightElement = document.getElementById('recycledWeight');
  recycledWeightElement.textContent = value || '0';
}

function checkSelection() {
  const month = document.getElementById("monthSelect").value;
  const statistic = document.getElementById("statisticSelect").value;

  if (month && statistic) {
    document.getElementById("imagesSection").style.display = "block";
  } else {
    document.getElementById("imagesSection").style.display = "none";
  }
}
document.getElementById('monthSelect').addEventListener('change', function() {
  const month = this.value;
  const imageNumber = ((month - 1) % 4) + 1; // This will cycle through images 1-4
  document.getElementById('garbageImage').src = `assets/garbage_${imageNumber}.jpg`;
});


function showGarbageImages() {
  const monthSelect = document.getElementById('monthSelect');
  const garbageContainer = document.getElementById('garbageContainer');
  
  if (monthSelect.value) {
      garbageContainer.style.display = 'block';
  } else {
      garbageContainer.style.display = 'none';
  }
}
function toggleChart(chartId, imgSrc) {
  const chart = document.getElementById(chartId);
  const canvas = chart.querySelector('canvas');
  const img = chart.querySelector('img');
  const icon = document.getElementById('icon' + chartId.slice(-1));

  if (chart.style.display === 'none') {
      // Mở rộng
      chart.style.display = 'block';
      img.style.display = 'block';  // Hiển thị ảnh
      canvas.style.display = 'none'; // Ẩn canvas
      icon.style.transform = 'rotate(180deg)';
  } else {
      // Thu gọn
      chart.style.display = 'none';
      img.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
  }
}



// Initialize charts when the page loads
window.onload = function() {
    // Column Chart
    const columnCtx = document.getElementById('columnChart').getContext('2d');
    new Chart(columnCtx, {
        type: 'bar',
        data: {
            labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
            datasets: [{
                label: 'Khối lượng (Kg)',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: '#28A745',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Pie Chart 1
    const pieCtx1 = document.getElementById('pieChart1').getContext('2d');
    new Chart(pieCtx1, {
        type: 'doughnut',
        data: {
            labels: ['Đã thu hồi', 'Chưa thu hồi'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#28A745', '#e9ecef']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Pie Chart 2
    const pieCtx2 = document.getElementById('pieChart2').getContext('2d');
    new Chart(pieCtx2, {
        type: 'doughnut',
        data: {
            labels: ['Đã thu hồi', 'Chưa thu hồi'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#28A745', '#e9ecef']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

// Hàm xử lý chọn vị trí các thùng chứa
function selectContainerLocation() {
  // Thực hiện các thao tác cần thiết khi người dùng chọn vị trí thùng chứa
  console.log("Đã chọn vị trí các thùng chứa");

  // Có thể hiển thị một thông báo hoặc mở thêm lựa chọn
  // Ví dụ:
  alert("Vị trí các thùng chứa đã được chọn!");
}

// Hàm xử lý chọn vị trí các lưu chứa
function selectStorageLocation() {
  // Thực hiện các thao tác cần thiết khi người dùng chọn vị trí lưu chứa
  console.log("Đã chọn vị trí các lưu chứa");

  // Có thể hiển thị một thông báo hoặc mở thêm lựa chọn
  alert("Vị trí các lưu chứa đã được chọn!");
}

// Hàm xử lý tối ưu hóa lộ trình
function optimizeRoute() {
  // Thực hiện các thao tác tối ưu hóa lộ trình
  console.log("Đã tối ưu hóa lộ trình");

  // Ví dụ: Thực hiện tối ưu hóa lộ trình và thông báo kết quả
  alert("Lộ trình tối ưu hóa đã được thực hiện!");
}
