angular.module('timerApp', [])
  .controller('TimerController', function($scope, $interval) {
    $scope.timeLeft = 10;
    let timer;

    $scope.startTimer = function() {
      if (!timer) {
        timer = $interval(function() {
          if ($scope.timeLeft > 0) {
            $scope.timeLeft--;
          } else {
            $interval.cancel(timer);
            timer = null;
          }
        }, 1000);
      }
    };

    $scope.stopTimer = function() {
      if (timer) {
        $interval.cancel(timer);
        timer = null;
      }
    };

    $scope.resetTimer = function() {
      $scope.stopTimer();
      $scope.timeLeft = 10;
    };
  });