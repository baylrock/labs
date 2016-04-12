%%
figure;
tripdata
plot(datin)
PN = 8;
A= .2 + PN/25;
a = genfis2(datin,datout,A);
plotfis(a)
%%
figure
subplot(1,1,1)
fuzout=evalfis(datin,a);
subplot(2,1,1)
plot(datin)
subplot(2,1,2)
plot([datout fuzout])

%%
figure
subplot(1,1,1)
plot(datout,fuzout,'bx',[0 10],[0 10],'r:')
xlabel('Actual Value')
ylabel('Predicted Value')
axis square
%%

figure
chkdatin=datin;
chkdatout = datout;

chkfuzout=evalfis(chkdatin,a);
plot(chkdatout,chkfuzout,'bx',[0 10],[0 10],'r:')
axis square
xlabel('Actual Value')
ylabel('Predicted Value')

%%
figure
eps=0;
eps1(25) = 0;
for i=1,25;
eps1(i)=abs(chkdatout(i)-chkfuzout(i));
eps = eps + eps1(i);
end; eps=eps/25;
plot(eps1)



